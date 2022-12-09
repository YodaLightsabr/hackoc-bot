import Command from '@conflict/beta/commands';
import { Embed, ActionRow, Button } from '@conflict/beta/components';

export default new Command({
    name: 'sweep',
    description: 'Clean up a channel',
    options: [
        {
            "type": 10,
            "name": "count",
            "required": false,
            "description": "Number of messages to sweep"
        },
    ],
    testing: {
        guildId: '1018262009923502161'
    },
    execute: async (command, options, utils) => {
        const count = Math.min(command.options?.count || 10, 100);
        if (!command.member?.permissions.has('MANAGE_MESSAGES')) return command.view(
            <message>
                <Embed color="#ff3333">
                    <title>❗ Unable to sweep</title>
                    <description>It appears you aren't on the {'<@&1018263308865904660>'}</description>
                </Embed>
            </message>
        );
        try {
            await command.channel.bulkDelete(count);
            command.view(
                <message>
                    <Embed color="#33ff33">
                        <title>🧹 Sweep successful</title>
                        <description>Swept {count} messages from {'<#' + command.channel.id + '>'}</description>
                    </Embed>
                </message>
            );
        } catch (err) {
            command.view(
                <message>
                    <Embed color="#ff3333">
                        <title>❗ Unable to sweep</title>
                        <description>Uncaught `{err.name}` occurred</description>
                    </Embed>
                </message>
            );
        }
    }
});
