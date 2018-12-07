

const commando = require('discord.js-commando');

var Token = require('../../../Token.json');

class restartTeamspeakCommand extends commando.Command{
    constructor(client){
        super(client,{
            name: 'restartteamspeak',
            group: 'server',
            memberName: 'restartteamspeak',
            description: 'Restarts the teamspeak servers'
        });
    }

    async run(message, args){
                
        restartsvc(Token.username, Token.password, Token.IPAdress, 'Teamspeak');
        message.reply("Successfully restarted teamspeak");
        
    }
}

module.exports = restartTeamspeakCommand;




var request = require('request');




/**
 * 
 * @param {String} clientUsername 
 * @param {String} clientPassword 
 * @param {String} userHostname 
 * @param {String} serverServiceName 
 */
async function restartsvc(clientUsername, clientPassword, userHostname, serverServiceName){



    var options = { method: 'GET',
      url: userHostname+'/checkcredentialsajax',
      qs: { username: clientUsername, password: clientPassword },
      headers: { 'cache-control': 'no-cache' } };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      
    
      
    
    var options1 = { method: 'POST',
      url: userHostname+'/login',
      headers: { 'cache-control': 'no-cache',
                  'Connection': 'keep-alive' },
      form: 
       { authmethod: 'default',
         password: clientPassword,
         username: clientUsername,
         undefined: undefined } };
    
    request(options1, function (error1, response1, body1) {
      if (error1) throw new Error(error1);
      //console.log(response1.headers);
      //console.log(body1);
    
      var cookie = 'fdfusionsessionid='+response1.headers['set-cookie'].pop().match('\=(.*?)\=')[1] + '=';  
    
    var options2 = { method: 'GET',
      url: userHostname+'/fd/restartajax',
      qs: { svcname: serverServiceName, '': '' },
      headers: 
       { 'cookie': cookie,
         Accept: 'application/json, text/javascript, */*; q=0.01' } };
    
    request(options2, function (error2, response2, body2) {
      if (error2) throw new Error(error2);
    
      
      //console.log(JSON.parse(body2).resultType);
    });
    
    });
      
    });
    }