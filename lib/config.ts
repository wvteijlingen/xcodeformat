import { UserError } from "./error.ts";
import {
  SwiftFormatArguments,
  SwiftFormatArgumentsKey,
  SwiftFormatConfig,
  validSwiftFormatArgumentsKeys,
} from "./models.ts";
import { executeShellCommand } from "./shell.ts";
import { SWIFTFORMAT_DEFAULT_ARGUMENTS } from "./swiftformat_defaults.ts";
import { fileExists, splitOnFirstSpace } from "./util.ts";

export async function activateConfig(filePath: string) {
  const plistFilePath = Deno.realPathSync(
    `${
      Deno.env.get("HOME")
    }/Library/Group Containers/com.charcoaldesign.SwiftFormat/Library/Preferences/com.charcoaldesign.SwiftFormat.plist`,
  );

  if (!fileExists(plistFilePath)) {
    throw new UserError(
      `SwiftFormat not detected.\n Install the SwiftFormat Xcode extension: https://github.com/nicklockwood/SwiftFormat?tab=readme-ov-file#xcode-source-editor-extension`,
    );
  }

  if (!fileExists(filePath)) {
    throw new UserError(
      `No configuration file found. Expected '${filePath}' to exist`,
    );
  }

  const configuration = readConfigFile(filePath);
  await writeConfigToPlist(configuration, plistFilePath);
}

function readConfigFile(filePath: string): SwiftFormatConfig {
  const configArguments = parseArguments(Deno.readTextFileSync(filePath));
  const defaultArguments = SWIFTFORMAT_DEFAULT_ARGUMENTS;

  const configuration: SwiftFormatConfig = {
    options: {},
    enabled: {},
  };

  for (const [key, defaultValue] of defaultArguments.entries()) {
    if (key == "enable" || key == "disable") {
      continue;
    }
    configuration.options[key] = configArguments.get(key) ??
      defaultValue;
  }

  for (const rule of defaultArguments.get("enable")!.trim().split(" ")) {
    configuration.enabled[rule] = configArguments.get("disable")?.includes(rule)
      ? false
      : true;
  }

  for (const rule of defaultArguments.get("disable")!.trim().split(" ")) {
    configuration.enabled[rule] = configArguments.get("enable")?.includes(rule)
      ? true
      : false;
  }

  return configuration;
}

function parseArguments(input: string): SwiftFormatArguments {
  const settings = input.trim().split("\n").reduce((accumulator, value) => {
    if (value.trim() !== "") {
      const [key, option] = splitOnFirstSpace(value.replace("--", ""));
      if (
        validSwiftFormatArgumentsKeys.includes(key as SwiftFormatArgumentsKey)
      ) {
        accumulator.set(key as SwiftFormatArgumentsKey, option);
      }
    }

    return accumulator;
  }, new Map<SwiftFormatArgumentsKey, string>());

  return settings;
}

async function writeConfigToPlist(config: SwiftFormatConfig, filePath: string) {
  for (const option of Object.keys(config.options)) {
    const value = config.options[option];

    await executeShellCommand("/usr/libexec/PlistBuddy", [
      "-c",
      `set format-options:${option} ${value}`,
      filePath,
    ]);
  }

  for (const option of Object.keys(config.enabled)) {
    const value = config.enabled[option];
    await executeShellCommand("/usr/libexec/PlistBuddy", [
      "-c",
      `set rules:${option} ${value}`,
      filePath,
    ]);
  }

  await executeShellCommand("/usr/libexec/PlistBuddy", [
    "-c",
    "set infer-options false",
    filePath,
  ]);

  await executeShellCommand("defaults", [
    "com.charcoaldesign.SwiftFormat",
    filePath,
  ]);
}
