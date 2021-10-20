module.exports = {
    app: {
        px: '*',
        token: 'ODk0NDI3MTEyNDY1ODkxMzM4.YVp2KQ.Ep5y8UGDUq-MTtp3IEJ9k2D3Y74',
        playing: 'Test'
    },

    opt: {
        DJ: {
            enabled: true,
            role: 'REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'st', 'shuffle', 'skip', 'stop', 'volume', 'play']
        },
        maxVol: 500,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
