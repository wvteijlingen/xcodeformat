import { executeShellCommand } from "./shell.ts";

export async function getCurrentOpenFile(): Promise<string> {
	return await executeShellCommand(
		"osascript",
		["-e", GET_CURRENT_FILE],
	);
}

export async function formatAndSaveCurrentOpenFile(): Promise<string> {
	return await executeShellCommand(
		"osascript",
		["-e", FORMAT_AND_SAVE],
	);
}

const GET_CURRENT_FILE = `
tell application "Xcode"
	set currentActiveDocument to document 1 whose name ends with (word -1 of (get name of window 1))
	set filePath to path of CurrentActiveDocument
end tell
`;

const FORMAT_AND_SAVE = `
tell application "Xcode"
	activate
end tell

tell application "System Events"
	click menu item ¬
		"Format File" of menu 1 of menu item ¬
		"SwiftFormat" of menu 1 of menu bar item ¬
		"Editor" of menu bar 1 of application process "Xcode"
	
	click menu item ¬
		"Save" of menu 1 of menu bar item ¬
		"File" of menu bar 1 of application process "Xcode"
end tell
`;
