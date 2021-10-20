module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing!`);

        const success = queue.skip();

        return message.channel.send(success ? `${queue.current.title} was skipped!` : `Something went wrong!`);
    },
};