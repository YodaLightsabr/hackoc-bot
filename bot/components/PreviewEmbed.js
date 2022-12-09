import { ActionRow, Embed, Button } from '@conflict/beta/components';
import { getMessageUrl } from '../utils.js';

export default function PreviewEmbed ({ children, message }) {
    const imageUrl = message.attachments.first().url;
    return (
        <message>
            <Embed color={2680168} timesamp={Date.now()} author={{
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL(),
                url: getMessageUrl(message)
            }}>
                <title>
                    🖼️ New Scrapbook Post
                </title>
                <description>
                    {message.content}
                </description>
                <image>
                    <url>{imageUrl}</url>
                </image>
                {children}
            </Embed>
            <ActionRow>
                <Button label="View in #🖼-scrapbook" url={getMessageUrl(message)} />
            </ActionRow>
        </message>
    );
}
