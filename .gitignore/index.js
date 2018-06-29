const Discord = require("discord.js");
const token = "NDYyMzMwOTI3NDMxOTQyMTQ2.DhgS0w.YiZzpeOrQrCoQyzLLaAMANCoWd8"
var bot = new Discord.Client();
const prefix = '!';
var memberCount = client.users.size;
var servercount = client.guilds.size;


bot.on("ready", function(){
	bot.user.setGame("J'aime mon maitre :)");
	console.log("le bot est lancé");
});

client.on('message', message => {
	if (message.content === (prefix + "test")){
	message.reply('test !');
} else if (message.content === (prefix + "bonjour")){
	message.reply('bonjour à toi ');
} else if(message.content.startsWith(prefix +'botname')){
	client.user.setUsername(message.content.substr(9));
} else if (message.content === (prefix + "stats")) {
	let m = " ";
	m += 'Il y a actuellement  ${message.guild.channels.size} channels sur ce serveurs \n';
	m += 'je suis en compagnie de ${message.guild.members.size} membres';
	m += 'je suis présent dans ${client.guild.size} serveurs \n';
	message.author.sendMessage(m).catch(console.log); 
}
});


bot.login(token);
