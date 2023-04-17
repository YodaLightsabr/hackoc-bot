import Command from '@conflict/beta/commands';
import CommandResponse from '../components/CommandResponse.js';
import fetch from 'node-fetch';

export default new Command({
    name: 'delete',
    description: 'Delete an object',
    options: [
        {
            "type": 3,
            "name": "id",
            "required": true,
            "description": "Object's shortId"
        }
    ],
    testing: {
        guildId: '1018262009923502161'
    },
    execute: async (command, options, utils) => {
        const id = command.options?.id;
        if (!command.member?.permissions.has('MANAGE_MESSAGES')) return command.view(
            <message>
                <CommandResponse 
                    title="Unable to delete"
                    error="It appears you aren't on the <@&1018263308865904660>"
                />
            </message>
        );
        try {
            await fetch("https://hackoc.org/api/scrapbookdelete", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    token: process.env.HACKOC_API_TOKEN,
                    id
                })
            }).then(res => res.json());
            command.view(
                <message>
                    <CommandResponse
                        title="Deletion successful"
                        emoji="🗑️"
                        message={`Deleted \`${id}\` from Scrapbook`}
                    />
                </message>
            );
        } catch (err) {
            console.error(err);
            command.view(
                <message>
                    <CommandResponse
                        title="Unable to delete"
                        error={`Uncaught \`${err.name}\` occurred: ${err.message}`}
                    />
                </message>
            );
        }
    }
});
