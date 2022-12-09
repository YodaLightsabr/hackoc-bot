import Command from '@conflict/beta/commands';
import { Embed, ActionRow, Button } from '@conflict/beta/components';
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
    if (!command.member?.permissions.has('MANAGE_MESSAGES')) return command.view(global.__ConflictViewParser("message", null, global.__ConflictViewParser(Embed, {
      color: "#ff3333"
    }, global.__ConflictViewParser("title", null, "\u2757 Unable to sweep"), global.__ConflictViewParser("description", null, "It appears you aren't on the ", '<@&1018263308865904660>'))));

    try {
      await command.channel.bulkDelete(count);
      command.view(global.__ConflictViewParser("message", null, global.__ConflictViewParser(Embed, {
        color: "#33ff33"
      }, global.__ConflictViewParser("title", null, "\uD83E\uDDF9 Sweep successful"), global.__ConflictViewParser("description", null, "Swept ", count, " messages from ", '<#' + command.channel.id + '>'))));
    } catch (err) {
      command.view(global.__ConflictViewParser("message", null, global.__ConflictViewParser(Embed, {
        color: "#ff3333"
      }, global.__ConflictViewParser("title", null, "\u2757 Unable to sweep"), global.__ConflictViewParser("description", null, "Uncaught `", err.name, "` occurred"))));
    }
  }
});