import Command from '@conflict/beta/commands';
import { Embed } from '@conflict/beta/components';
export default new Command({
  name: 'help',
  description: 'Get help',
  options: [],
  testing: {
    guildId: '1018262009923502161' // Your guild ID here

  },
  execute: async (command, options, utils) => {
    command.view(global.__ConflictViewParser("message", null, global.__ConflictViewParser(Embed, {
      color: "#ff3333",
      image: {
        url: "https://conflict.js.org/favicon.png"
      }
    }, global.__ConflictViewParser("title", null, "Hello, world!"), global.__ConflictViewParser("description", null, "Welcome to **Conflict**."))));
  }
});