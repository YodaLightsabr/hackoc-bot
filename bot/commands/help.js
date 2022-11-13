import Command from '@conflict/beta/commands';
import { Embed, ActionRow, Button } from '@conflict/beta/components';

export default new Command({
    name: 'help',
    description: 'Get help',
    options: [],
    testing: {
        guildId: '1018262009923502161' // Your guild ID here
    },
    execute: async (command, options, utils) => {
        command.view(
            <message>
                <Embed color="#ff3333" image={{ url: "https://conflict.js.org/favicon.png" }}>
                    <title>Hello, world! ahhhhh</title>
                    <description>Welcome to **Conflict**.</description>
                </Embed>
                <ActionRow>
                    <Button onClick={click => {
                        click.view(
                            <message>
                                <content>Test</content>
                            </message>
                        )
                    }} label="Test" variant={2} />
                </ActionRow>
            </message>
        );
    }
});
