import { View } from '@conflict/beta/view';
import { deleteAfter } from '@conflict/beta/hooks';
import { StatelessButton, Button, ActionRow, Embed } from '@conflict/beta/components';

export default function finish ({ userID }) {
    return new View(
        <message>
            <content>Welcome to {'<:hackoc:1022357235575308390>'} Hack OC, {`<@${userID}>`}! Have you taken a look at our {'<#1018263922299645994>'} yet?</content>
            <ActionRow>
                <StatelessButton onClick={click => {
                    click.member.roles.add('1018263397571231755');
                    click.guild.channels.cache.get('1022350908333490226').send(`Welcome, <@${click.user.id}>. Why don't you introduce yourself?`);
                    click.view(
                        <message>
                            <content>Awesome! Why don't we have a look at the rest of the server now? Check out {'<#1022350908333490226>'}.</content>
                        </message>
                    )
                    setTimeout(() => {
                        click.channel.setName('notifications-' + click.member.displayName.toLowerCase().split(' ').join('-').split('').filter(a => `-abcdefghijklmnopqrstuvwxyz1234567890`.includes(a)).join(''));
                        click.channel.send(`<@${click.user.id}> Welcome to the server! Going forward, I'll use this channel to send you notifications or updates about registration, judging, and more.`);
                    }, 10000);
                }} label="Yep!" variant={3} />
            </ActionRow>
        </message>
    );
}