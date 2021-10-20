const ms = require('ms');

module.exports = {
    name: 'skipto',
    aliases: ['st'],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing!`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`You are trying to skip to a point not in the video!`);

        await queue.seek(timeToMS);

        message.channel.send(`You have skipped to **${ms(timeToMS, { long: true })}** `);
    },
};