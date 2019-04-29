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
	else {
		if(message.channel.id == "543307285464875019") {
			if(message.embeds.length > 0) {
				if(message.embeds[0].author.name == "Trixie Lulamoon") {
					if(message.reactions.first() == null) {
						await sleep(4000);
					}
					else {
						message.react(message.reactions.first().emoji);
					}
				}
			}
		}
	}
});

function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}
