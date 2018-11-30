const Commando = require('discord.js-commando');

function discordBot(token){
    const Discord = require('discord.js');
    const client = new Commando.Client();
    
    client.registry.registerGroup('simple','Simple');
    client.registry.registerDefaults();
    client.registry.registerCommandsIn(__dirname + '/commands');

    
    client.on("message", message => {
        if(message.content === "ping"){
            message.channel.send("Pong!");
        }
    });


    client.login(token);
};

module.exports = discordBot;