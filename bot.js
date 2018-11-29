var Discord = require('./discord.js');
var bot = new Discord.Client();
bot.login(process.env.token);
bot.on("message", function(message) {
	if(message.guild === null && message.author.id != "433728756469727234") {
		bot.fetchUser("512304806799605762").then(function(user) {
			user.send(message.content);
		});
	}
});