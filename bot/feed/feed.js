const feedChannel = '1022351813804044378';

import ScrapbookPreviewEmbed from "../components/ScrapbookPreviewEmbed.js";
import ShipPreviewEmbed from "../components/ShipPreviewEmbed.js";
import View from '@conflict/beta/view';

export default async function feedPost (data, client, type) {
    const feed = client.channels.cache.get(feedChannel);


    const message = await feed.send(
        type == 'scrapbook' ? new View(
            <ScrapbookPreviewEmbed message={data.message} url={data.external} etc={data} />
        ) : (
            type == 'ship' ? new View(
                <ShipPreviewEmbed message={data.message} url={data.external} etc={data} />
            ) : (<></>)
        )
    );
    await message.crosspost();
}