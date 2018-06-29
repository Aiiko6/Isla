const Discord = require("discord.js");
const token = "NDYyMzMwOTI3NDMxOTQyMTQ2.DhgS0w.YiZzpeOrQrCoQyzLLaAMANCoWd8"
var bot = new Discord.Client();
const prefix = '!';


bot.on("ready", function(){
	bot.user.setGame("J'aime mon maitre :)");
	console.log("le bot est lancé");
});


client.on('message', message => {
	if (message.content === ("test")){
	message.reply('test !');
} else if (message.content === ("bonjour")){
	message.reply('bonjour à toi ');
});

bot.login(token);
