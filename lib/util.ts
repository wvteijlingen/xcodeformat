export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function splitOnFirstSpace(str: string) {
  const firstSpaceIndex = str.indexOf(" ");

  if (firstSpaceIndex === -1) {
    throw `No space found in '${str}'`;
  }

  // Split the string into two parts: before and after the first space
  const firstPart = str.substring(0, firstSpaceIndex);
  const secondPart = str.substring(firstSpaceIndex + 1);

  return [firstPart, secondPart];
}

export function fileExists(filePath: string): boolean {
  try {
    const fileInfo = Deno.lstatSync(filePath);
    return fileInfo.isFile;
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      return false;
    } else {
      throw err;
    }
  }
}

export function directoryExists(filePath: string): boolean {
  try {
    const fileInfo = Deno.lstatSync(filePath);
    return fileInfo.isDirectory;
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      return false;
    } else {
      throw err;
    }
  }
}
