import { View } from '@conflict/beta/view';
import { deleteAfter } from '@conflict/beta/hooks';
import { StatelessButton, Button, ActionRow, Embed } from '@conflict/beta/components';

let phrases = [
    "Discord Bots",
    "Slash Commands",
    "Message Components",
    "User Interfaces",
    "Scalable Bots",
    "User Experiences"
];

export default function finish ({ userID }) {
    return new View(
        <message>
            <content>Welcome to {'<:hackoc:1022357235575308390>'} Hack OC, {`<@${userID}>`}! Have you taken a look at our {'<#1018263922299645994>'} yet?</content>
            <ActionRow>
                <StatelessButton onClick={click => {
                    click.view(
                        <message>
                            <content>Awesome! Why don't we have a look at the rest of the server now?</content>
                            <components_arr> {/** output an array of Discord message components */}
                                <component type={1}>
                                    <StatelessButton onClick={click => {
                                        click.member.roles.add('1018263397571231755');
                                        click.guild.channels.cache.get('1022350908333490226').send(`Welcome, <@${click.user.id}>. Why don't you introduce yourself?`);
                                        click.channel.delete();
                                    }} label="Let's go!" variant={3} />
                                </component>
                            </components_arr>
                        </message>
                    )
                }} label="Yep!" variant={3} />
            </ActionRow>
        </message>
    );
}