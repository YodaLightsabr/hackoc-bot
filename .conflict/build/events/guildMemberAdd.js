import { onGuildMemberAdd } from '@conflict/beta/events';
import finish from "../views/finish.js?n=16638270442741857";
onGuildMemberAdd(async member => {
  console.log('new member', member);
  const name = 'welcome-' + member.displayName.toLowerCase().split(' ').join('-').split('').filter(a => `-abcdefghijklmnopqrstuvwxyz1234567890`.includes(a)).join('');
  console.log(name);
  const channel = await member.guild.channels.create(name, {
    reason: 'Create a welcome channel',
    parent: '1022358272377880640'
  });
  console.log(channel);
  await channel.permissionOverwrites.create(member, {
    "VIEW_CHANNEL": true
  });
  channel.view(finish({
    userID: member.id
  })); // await channel.send(`:wave: Hello, <@${member.id}>! Welcome to Hack OC!`);
});