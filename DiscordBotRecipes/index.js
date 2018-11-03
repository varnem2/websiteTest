var request = require('request');
var schedule = require('node-schedule');
const fs = require('fs');
const url = 'https://discordapp.com/api/webhooks/497504768898629632/TmfjDaibdHZM0zMBqiNRBHPad3j80bYxlCuQYMVU0Wkk7Tf31PWundOR4syXqhjBiTHl?wait=true';
const avatar_url = 'https://ih0.redbubble.net/image.436363942.7705/mp,550x550,matte,ffffff,t.3.jpg';
const name = "Recipie Bot";
var dir = 'C:/Users/dash/Documents/10SFG Recipies/';

var j = schedule.scheduleJob('0 0 0 6 * *', function(){
    console.log('The answer to life, the universe, and everything!');
    var fileName = fs.readdirSync(dir)[0];
    console.log(fileName);
    console.log();
    var bufferOne = fs.readFileSync(dir + fileName).toString('utf8');
    //console.log(bufferOne);
    request.post(url).form({avatar_url: avatar_url, username: name, content: bufferOne});
    fs.unlink(dir + fileName, function(err){
        if(err) throw err;
        console.log('File deleted: ' + fileName);
    });
});


