import { ActionRow, Embed, Button } from '@conflict/beta/components';
import { getMessageUrl } from '../utils.js';

export default function ShipPreviewEmbed ({ children, message, url, etc }) {
    const attachment = message.attachments.first();
    const imageUrl = attachment.url;
    return (
        <message>
            <Embed color={2680168} timesamp={Date.now()} author={{
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL(),
                url: getMessageUrl(message)
            }}>
                <title>
                🚢 New Ship
                </title>
                <description>
                    {`**${etc.title}**\n${message.content}`}
                </description>
                <image>
                    <url>{imageUrl}</url>
                </image>
                {children}
            </Embed>
            <ActionRow>
                <Button label="View in #🚢-ship" url={getMessageUrl(message)} />
                <Button label="View on hackoc.org" url={url} />
            </ActionRow>
        </message>
    );
}
