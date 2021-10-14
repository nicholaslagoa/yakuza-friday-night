const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES']});
const config = require("./config.json");
const cron = require('cron');

client.on("ready", () => {
    console.log(`The client is ready!`);

    let scheduledMessage = new cron.CronJob('* 00 17 * * 5', () => {
        const guild = client.guilds.cache.get('id');
        const channel = guild.channels.cache.get('id');
        channel.send("It's Yakuza Friday Night, let out all of your feelings! https://youtu.be/DfEnIFV2-mc")
    });
          
    scheduledMessage.start()
});

client.login(process.env.DJS_TOKEN);