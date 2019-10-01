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

client.on('message',async message => {
  if(message.author.bot){ return; }

let keyword = ['สวัสดี','หวัดดี','ดีคับ','ดีค่ะ','ดีคร้าบบ','ดีจ้าา','ดีครับ']; //คำถามจากคน
let answer = ['ควย']; //คำตอบบอท
if(keyword.some(word => message.content.includes(word))){
   message.reply(answer[Math.floor(Math.random()*answer.length)]);

      }
});

client.login(process.env.BOT_TOKEN);
