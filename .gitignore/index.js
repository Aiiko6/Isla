const Discord = require("discord.js");
const token = "NDYyMzMwOTI3NDMxOTQyMTQ2.DhgS0w.YiZzpeOrQrCoQyzLLaAMANCoWd8"
var bot = new Discord.Client();
const prefix = '!';


bot.on("ready", function(){
	bot.user.setGame("J'aime mon maitre :)");
	console.log("le bot est lancé");
});


bot.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'ping')) {
        message.channel.sendMessage('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
    }
});

bot.login(token);
