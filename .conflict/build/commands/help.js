import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import Command from '@conflict/beta/commands';
import { Embed, ActionRow, Button } from '@conflict/beta/components';
import fs from 'fs';
import path from 'path';
export async function getCommands() {
  const commandFiles = fs.readdirSync(__dirname);
  const commands = {};

  for (const file of commandFiles) {
    const command = (await import(path.join(__dirname, file))).default;
    console.log({
      command
    });
    commands[command.name] = {
      name: command.name,
      description: command.description,
      arguments: command.options,
      usage: `/${command.name} ${command.options.map(option => option.required ? `<${option.name}>` : `[${option.name}]`).join(' ')}`.trim()
    };
  }

  return commands;
}
export default new Command({
  name: 'help',
  description: 'Get help',
  options: [],
  testing: {
    guildId: '1018262009923502161' // Your guild ID here

  },
  execute: async (command, options, utils) => {
    const commands = await getCommands();
    command.view(global.__ConflictViewParser("message", null, global.__ConflictViewParser(Embed, {
      color: "#fa7b33",
      thumbnail: {
        url: "https://cloud-5xq08uqez-hack-club-bot.vercel.app/0hack_oc_-_dark_bg__1_.png"
      }
    }, global.__ConflictViewParser("title", null, "Hack OC Bot"), global.__ConflictViewParser("description", null, Object.values(commands).map(command => `**/${command.name}**: ${command.description}\n\`${command.usage}\``).join('\n\n'))), global.__ConflictViewParser(ActionRow, null, global.__ConflictViewParser(Button, {
      onClick: click => {
        click.view(global.__ConflictViewParser("message", null, global.__ConflictViewParser("content", null, JSON.stringify(commands, null, 4))));
      },
      label: "Test",
      variant: 2
    }))));
  }
});