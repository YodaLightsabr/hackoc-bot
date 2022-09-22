import { onMessageCreate } from '@conflict/beta/events';
onMessageCreate(message => {
  if (message.author?.bot) return;
  if (message.content?.toLowerCase()?.includes('hack oc')) return message.react('🍊');
  if (message.content?.includes('<@1022269868478828645>')) return message.react('🍊');
});