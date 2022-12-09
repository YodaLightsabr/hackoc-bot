const scrapbookChannel = '1022275757692682240';
import { onMessageCreate } from '@conflict/beta/events';
import feedPost from "../feed/feed.js?n=16705753772671200";
import { getMessageUrl, wait } from "../utils.js?n=16705753772672678";
onMessageCreate(async message => {
  if (message.channel.id != scrapbookChannel) return;
  if (message.author?.bot) return;
  const valid = validateScrapbookPost(message);

  if (!valid) {
    await message.channel.sendTyping();
    await wait(1000);
    await message.author.send('Your post was deleted because it did not meet the requirements for the scrapbook. Please read the rules and try again.');
    await wait(1000);
    await message.delete();
    return;
  }

  await feedPost({
    url: getMessageUrl(message),
    message
  }, message.client);
});
export function validateScrapbookPost(message) {
  console.log(message);
  return true;
}