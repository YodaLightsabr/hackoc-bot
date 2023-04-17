const feedChannel = '1022351813804044378';

import PreviewEmbed from "../components/PreviewEmbed.js";
import View from '@conflict/beta/view';

export default async function feedPost (data, client) {
    const feed = client.channels.cache.get(feedChannel);


    const message = await feed.send(
        new View(
            <PreviewEmbed message={data.message} url={data.external} />
        )
    );
    await message.crosspost();
}