

function discordBot(token){
    const Discord = require('discord.js');
    const client = new Discord.Client();
    
    client.on("message", message => {
        if(message.content === "ping"){
            message.channel.send("Pong!");
        }
    });


    client.login(token);
};

module.exports = discordBot;