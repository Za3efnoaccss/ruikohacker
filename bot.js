const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

var memberCount = (guild.members.filter(member => !member.user.bot).size).toString() + ‘ Members’;

});

bot.user.setPresence({ game: { name: memberCount}});

});

client.login(process.env.BOT_TOKEN);
