import { View } from '@conflict/beta/view';
import { deleteAfter } from '@conflict/beta/hooks';
import { StatelessButton, Button, ActionRow, Embed } from '@conflict/beta/components';
export default function finish({
  userID
}) {
  return new View(global.__ConflictViewParser("message", null, global.__ConflictViewParser("content", null, "Welcome to ", '<:hackoc:1022357235575308390>', " Hack OC, ", `<@${userID}>`, "! Have you taken a look at our ", '<#1018263922299645994>', " yet?"), global.__ConflictViewParser(ActionRow, null, global.__ConflictViewParser(StatelessButton, {
    onClick: click => {
      click.member.roles.add('1018263397571231755');
      click.guild.channels.cache.get('1022350908333490226').send(`Welcome, <@${click.user.id}>. Why don't you introduce yourself?`);
      click.view(global.__ConflictViewParser("message", null, global.__ConflictViewParser("content", null, "Awesome! Why don't we have a look at the rest of the server now? Check out ", '<#1022350908333490226>', ".")));
    },
    label: "Yep!",
    variant: 3
  }))));
}