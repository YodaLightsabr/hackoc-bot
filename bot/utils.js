export function getMessageUrl (message) {
    return `https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id}`;
}

export const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));