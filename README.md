# XcodeFormat

XcodeFormat is a binary that adds Format on Save functionality to Xcode using [SwiftFormat](https://github.com/nicklockwood/SwiftFormat).

# Installation

1. Install the [SwiftFormat Xcode extension](https://github.com/nicklockwood/SwiftFormat?tab=readme-ov-file#xcode-source-editor-extension): `brew install --cask swiftformat-for-xcode`
1. Install XcodeFormat: `brew install wvteijlingen/tap/xcodeformat`

# Usage

Start XcodeFormat, passing in the path to the root directory of your Swift project:

```bash
xcodeformat path/to/project/root
```

XcodeFormat now watches any changes to Swift files in your project directory,
and will call format a file when you save it through Xcode.

> XcodeFormat will only work if the project root contains a .swiftformat configuration file.
> See [SwiftFormat: config file](https://github.com/nicklockwood/SwiftFormat?tab=readme-ov-file#config-file)
> on how to create this. (Config files in subdiretories are not supported.)