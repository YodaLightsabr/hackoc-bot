const scrapbookChannel = '1022275757692682240';
import crypto from 'crypto';

import { onMessageCreate } from '@conflict/beta/events';

import feedPost from '../feed/feed.js';
import { getMessageUrl, wait } from '../utils.js';
import fetch from 'node-fetch';

export async function post (user, avatar, message, image) {
    const response = await fetch("https://hackoc.org/api/scrapbookpost", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token: process.env.HACKOC_API_TOKEN,
            user,
            avatar,
            message,
            image
        })
    }).then(res => res.json());
    return response.uid;
}

onMessageCreate(async message => {
    if (message.channel.id != scrapbookChannel) return;
    if (message.author?.bot) return;

    const valid = validateScrapbookPost(message);

    if (!valid) {
        await message.member.send('Your post was deleted because it did not meet the requirements for the scrapbook. Please read the rules and try again.');
        await message.delete();
        return;
    }

    const id = await post(message.author.tag, message.author.displayAvatarURL(), message.content, message.attachments.first().url);
    
    const thread = await message.startThread({
        name: `🖼️ ${id.substring(0, 4)} ${message.author.tag.substring(0, 15)}`,
    });

    
    
    await thread.send(`Awesome post! I've added it to the Hack OC website: https://hackoc.org/s/${id};`)

    await feedPost({ url: getMessageUrl(message), message }, message.client);
});

export function validateScrapbookPost (message) {
    const attachment = message.attachments.first();

    return !!attachment;
}