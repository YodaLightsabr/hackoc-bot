const shipChannel = '1022275603312947210';
import crypto from 'crypto';

import { onMessageCreate } from '@conflict/beta/events';

import feedPost from '../feed/feed.js';
import { getMessageUrl, wait } from '../utils.js';
import fetch from 'node-fetch';

export async function post (user, avatar, message, image, url, title) {
    const response = await fetch("https://hackoc.org/api/shippost", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token: process.env.HACKOC_API_TOKEN,
            name: user,
            avatar,
            message,
            image,
            title,
            discord: url
        })
    }).then(res => res.json());
    return response.shortId;
}

onMessageCreate(async message => {

    if (message.channel?.parentId != shipChannel) return;
    if (message.author?.bot) return;

    const valid = validateShipPost(message);

    if (!valid) {
        await message.member.send('Ship posts require an image, so I\'ve gone ahead and deleted your message. Try re-sending with an image attached.');
        await message.delete();
        return;
    }
    console.log(message);
    const thread = message.channel;

    const id = await post(message.author.tag + '', message.author.displayAvatarURL(), message.content, message.attachments.first().url, message.url, thread.name);
    

    
    const externalUrl = `https://hackoc.org/h/${id}`;
    await thread.send(`Awesome project! I've added it to the Hack OC website: ${externalUrl}`)

    await feedPost({ url: getMessageUrl(message), message, external: externalUrl, title: thread.name }, message.client, "ship");
});

export function validateShipPost (message) {
    const attachment = message.attachments.first();

    return !!attachment;
}