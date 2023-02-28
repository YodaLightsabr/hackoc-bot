import Command from '@conflict/beta/commands';
import CommandResponse from "../components/CommandResponse.js?n=16776051473855052";
export default new Command({
  name: 'sweep',
  description: 'Clean up a channel',
  options: [{
    "type": 10,
    "name": "count",
    "required": false,
    "description": "Number of messages to sweep"
  }],
  testing: {
    guildId: '1018262009923502161'
  },
  execute: async (command, options, utils) => {
    const count = Math.min(command.options?.count || 10, 100);
    if (!command.member?.permissions.has('MANAGE_MESSAGES')) return command.view(global.__ConflictViewParser("message", null, global.__ConflictViewParser(CommandResponse, {
      title: "Unable to sweep",
      error: "It appears you aren't on the <@&1018263308865904660>"
    })));

    try {
      await command.channel.bulkDelete(count);
      command.view(global.__ConflictViewParser("message", null, global.__ConflictViewParser(CommandResponse, {
        title: "Sweep successful",
        emoji: "\uD83E\uDDF9",
        message: `Swept ${count} messages from <#${command.channel.id}>`
      })));
    } catch (err) {
      console.error(err);
      command.view(global.__ConflictViewParser("message", null, global.__ConflictViewParser(CommandResponse, {
        title: "Unable to sweep",
        error: `Uncaught \`${err.name}\` occurred: ${err.message}`
      })));
    }
  }
});