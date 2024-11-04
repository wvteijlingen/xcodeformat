import { DefaultSwiftFormatArguments } from "./models.ts";

export const SWIFTFORMAT_DEFAULT_ARGUMENTS: DefaultSwiftFormatArguments =
  new Map([
    ["acronyms", "ID,URL,UUID"],
    ["allman", "false"],
    ["anonymousforeach", "convert"],
    ["assetliterals", "visual-width"],
    ["asynccapturing", ""],
    ["beforemarks", ""],
    ["binarygrouping", "4,8"],
    ["callsiteparen", "default"],
    ["categorymark", "MARK: %c"],
    ["classthreshold", "0"],
    ["closingparen", "balanced"],
    ["closurevoid", "remove"],
    ["commas", "always"],
    ["complexattrs", "preserve"],
    ["computedvarattrs", "preserve"],
    ["condassignment", "after-property"],
    ["conflictmarkers", "reject"],
    ["dateformat", "system"],
    ["decimalgrouping", "3,6"],
    ["doccomments", "before-declarations"],
    ["elseposition", "same-line"],
    ["emptybraces", "no-space"],
    ["enumnamespaces", "always"],
    ["enumthreshold", "0"],
    ["exponentcase", "lowercase"],
    ["exponentgrouping", "disabled"],
    ["extensionacl", "on-extension"],
    ["extensionlength", "0"],
    ["extensionmark", "MARK: - %t + %c"],
    ["fractiongrouping", "disabled"],
    ["fragment", "false"],
    ["funcattributes", "preserve"],
    ["generictypes", ""],
    ["groupedextension", "MARK: %c"],
    ["guardelse", "auto"],
    ["header", "ignore"],
    ["hexgrouping", "4,8"],
    ["hexliteralcase", "uppercase"],
    ["ifdef", "indent"],
    ["importgrouping", "alpha"],
    ["indent", "4"],
    ["indentcase", "false"],
    ["indentstrings", "false"],
    ["initcodernil", "false"],
    ["lifecycle", ""],
    ["lineaftermarks", "true"],
    ["linebreaks", "lf"],
    ["markcategories", "true"],
    ["markextensions", "always"],
    ["marktypes", "always"],
    ["maxwidth", "none"],
    ["modifierorder", ""],
    ["nevertrailing", ""],
    ["nilinit", "remove"],
    ["noncomplexattrs", ""],
    ["nospaceoperators", ""],
    ["nowrapoperators", ""],
    ["octalgrouping", "4,8"],
    ["onelineforeach", "ignore"],
    ["operatorfunc", "spaced"],
    ["organizationmode", "visibility"],
    ["organizetypes", "actor,class,enum,struct"],
    ["patternlet", "hoist"],
    ["ranges", "spaced"],
    ["redundanttype", "infer-locals-only"],
    ["self", "remove"],
    ["selfrequired", ""],
    ["semicolons", "inline"],
    ["shortoptionals", "except-properties"],
    ["smarttabs", "enabled"],
    ["someany", "true"],
    ["storedvarattrs", "preserve"],
    ["stripunusedargs", "always"],
    ["structthreshold", "0"],
    ["tabwidth", "unspecified"],
    ["throwcapturing", ""],
    ["timezone", "system"],
    ["trailingclosures", ""],
    ["trimwhitespace", "always"],
    ["typeattributes", "preserve"],
    ["typeblanklines", "remove"],
    ["typedelimiter", "space-after"],
    ["typemark", "MARK: - %t"],
    ["voidtype", "void"],
    ["wraparguments", "preserve"],
    ["wrapcollections", "preserve"],
    ["wrapconditions", "preserve"],
    ["wrapeffects", "preserve"],
    ["wrapenumcases", "always"],
    ["wrapparameters", "default"],
    ["wrapreturntype", "preserve"],
    ["wrapternary", "default"],
    ["wraptypealiases", "preserve"],
    ["xcodeindentation", "disabled"],
    ["yodaswap", "always"],
    [
      "enable",
      "andOperator anyObjectProtocol applicationMain assertionFailures blankLineAfterImports modifierOrder numberFormatting opaqueGenericParameters preferForLoop preferKeyPath redundantBackticks redundantBreak redundantClosure redundantExtensionACL redundantFileprivate redundantGet redundantInit redundantInternal redundantLet redundantLetError redundantNilInit redundantObjc redundantOptionalBinding redundantParens redundantPattern redundantRawValues redundantReturn redundantSelf redundantStaticSelf redundantType redundantTypedThrows redundantVoidReturnType semicolons sortDeclarations sortImports sortTypealiases sortedImports sortedSwitchCases spaceAroundBraces spaceAroundBrackets spaceAroundComments spaceAroundGenerics spaceAroundOperators spaceAroundParens spaceInsideBraces spaceInsideBrackets spaceInsideComments spaceInsideGenerics spaceInsideParens specifiers strongOutlets strongifiedSelf todos trailingClosures trailingCommas trailingSpace typeSugar unusedArguments void wrap wrapArguments wrapAttributes wrapLoopBodies wrapMultilineStatementBraces wrapSingleLineComments yodaConditions",
    ],
    [
      "disable",
      "acronyms blankLineAfterSwitchCase blankLinesBetweenImports blockComments docComments isEmpty markTypes noExplicitOwnership organizeDeclarations redundantProperty sortSwitchCases wrapConditionalBodies wrapEnumCases wrapMultilineConditionalAssignment wrapSwitchCases",
    ],
  ]);
