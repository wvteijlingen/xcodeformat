import { debounce } from "jsr:@std/async/debounce";
import { activateConfig } from "./config.ts";
import { UserError } from "./error.ts";
import { directoryExists, sleep } from "./util.ts";
import * as xcode from "./xcode.ts";

const filePathsInProcessing: Set<string> = new Set();

const handleFileChanged = debounce(async (filePath: string) => {
  const currentXcodeFilePath = await xcode.getCurrentOpenFile();

  // console.log("File saved:", filePath);
  // console.log("     open: ", currentXcodeFilePath);

  if (filePathsInProcessing.has(filePath)) {
    // console.log(`Already processing, skipping: ${filePath}`);
    return;
  }

  if (!filePath.endsWith(".swift")) {
    // console.log(`Not a Swift file, skipping: ${filePath}`);
    return;
  }

  if (filePath.trim() !== currentXcodeFilePath.trim()) {
    // console.log(`Not currently editing in Xcode, skipping: ${filePath}`);
    return;
  }

  filePathsInProcessing.add(filePath);

  console.log(`Formatting '${filePath}'`);

  await xcode.formatAndSaveCurrentOpenFile();
  await sleep(500);

  filePathsInProcessing.delete(filePath);
}, 0);

export async function startWatching(path: string) {
  if (!directoryExists(path)) {
    throw new UserError(`Directory not found: '${path}'`);
  }

  const realPath = Deno.realPathSync(path);
  const configFilePath = `${realPath}/.swiftformat`;

  await activateConfig(configFilePath);

  const watcher = Deno.watchFs(realPath);

  console.log("--------------------");
  console.log(`Watching: ${realPath}`);
  console.log(`Config:   ${configFilePath}`);
  console.log("--------------------");

  for await (const event of watcher) {
    if (event.kind !== "modify") {
      continue;
    }

    const filePath = event.paths[0];

    // if (filePath == configFilePath) {
    // await activateSwiftFormatConfigFile(configFilePath);
    // } else {
    handleFileChanged(filePath);
    // }
  }
}
