export async function executeShellCommand(
  commandName: string,
  args: string[],
): Promise<string> {
  // console.log(commandName, args.join(" "));

  const command = new Deno.Command(commandName, {
    args: args,
    stdout: "piped",
  });

  const { stdout } = await command.spawn().output();

  return new TextDecoder().decode(stdout);
}
