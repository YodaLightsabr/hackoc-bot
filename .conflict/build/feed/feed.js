const feedChannel = '1022351813804044378';
import PreviewEmbed from "../components/PreviewEmbed.js?n=1677605147429189";
import View from '@conflict/beta/view';
export default async function feedPost(data, client) {
  const feed = client.channels.cache.get(feedChannel);
  const message = await feed.send(new View(global.__ConflictViewParser(PreviewEmbed, {
    message: data.message
  })));
  await message.crosspost();
}