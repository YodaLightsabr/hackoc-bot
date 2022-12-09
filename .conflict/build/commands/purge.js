import Command from '@conflict/beta/commands';
import { Embed, ActionRow, Button } from '@conflict/beta/components';
export default new Command({
  name: 'sweep',
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
    }, global.__ConflictViewParser("title", null, "Hello, world! ahhhhh"), global.__ConflictViewParser("description", null, "Welcome to **Conflict**.")), global.__ConflictViewParser(ActionRow, null, global.__ConflictViewParser(Button, {
      onClick: click => {
        click.view(global.__ConflictViewParser("message", null, global.__ConflictViewParser("content", null, "Test")));
      },
      label: "Test",
      variant: 2
    }))));
  }
});