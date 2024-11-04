import { UserError } from "./lib/error.ts";
import { startWatching } from "./lib/watcher.ts";

try {
  const watchRoot = Deno.args[0];

  if (!watchRoot) {
    throw new UserError("Usage: xcodeformat <path>");
  } else {
    await startWatching(watchRoot);
  }
} catch (error) {
  if (error instanceof UserError) {
    console.log(error.message);
  } else {
    throw error;
  }
}
