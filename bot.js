var Discord = require('./discord.js');
var bot = new Discord.Client();
bot.login(process.env.token);
bot.on("message", async function(message) {
	if(message.guild === null && message.author.id != "433728756469727234") {		
		if(message.author.id == "512304806799605762") {
			bot.fetchUser(message.content.split("-")[0]).then(function(user) {
				user.send(message.content.substring(message.content.indexOf("-") + 1, message.content.length));
			});
		}
		else {
			bot.fetchUser("512304806799605762").then(function(user) {
				user.send(message.author.id + "-" + message.content);
			});
		}
	}
});
