import Command from '@conflict/beta/commands';
import CommandResponse from '../components/CommandResponse.js';
import util from 'node:util';

export default new Command({
    name: 'admin',
    description: 'Admin-only tools',
    options: [
        {
            "type": 3,
            "name": "task",
            "required": true,
            "description": "Task to run"
        },
    ],
    testing: {
        guildId: '1018262009923502161'
    },
    execute: async (command, options, utils) => {
        const task = command.options?.task;
        if (!command.member?.permissions.has('MANAGE_MESSAGES')) return command.view(
            <message>
                <CommandResponse 
                    title="Unable to run"
                    error="It appears you aren't on the <@&1018263308865904660>"
                />
            </message>
        );
        try {
            const output = await (async () => {
                eval(task);
            })();
            const inspected = util.inspect(output, { colors: true }).split('\x1b').join('\u001b');
            let truncated = inspected.substring(0, 1900);
            if (truncated.length < inspected.length) truncated += `\n\n\u001b[0;30m( ... ${inspected.length - truncated.length} more chars )`;
            command.view(
                <message>
                    <CommandResponse
                        title="Task completed"
                        emoji="✅"
                        message={"```ansi\n" + truncated + "\n```"}
                    />
                </message>
            );
        } catch (err) {
            console.error(err);
            command.view(
                <message>
                    <CommandResponse
                        title="Unable to run"
                        error={`Uncaught \`${err.name}\` occurred: ${err.message}`}
                    />
                </message>
            );
        }
    }
});
