const Discord = require("discord.js");
const token = "NDYyMzMwOTI3NDMxOTQyMTQ2.DhgS0w.YiZzpeOrQrCoQyzLLaAMANCoWd8"
var bot = new Discord.Client();

bot.on("ready", function(){
	bot.user.setGame("J'aime mon maitre :)");
	console.log("le bot est lancé");
});

client.on('message', message =>{
  if(message.content.startsWith('#test')){
      message.reply('yes');
     }
});

bot.login(token);
