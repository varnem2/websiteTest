var request = require('request');
var schedule = require('node-schedule');
const fs = require('fs');
const url = 'https://discordapp.com/api/webhooks/497504768898629632/TmfjDaibdHZM0zMBqiNRBHPad3j80bYxlCuQYMVU0Wkk7Tf31PWundOR4syXqhjBiTHl?wait=true';
const avatar_url = 'https://ih0.redbubble.net/image.436363942.7705/mp,550x550,matte,ffffff,t.3.jpg';
const name = "Recipie Bot";
//var dir = 'C:/Users/dash/Documents/10SFG Recipies/';
var dir = __dirname + '/Recipies/';
const noPrep = 'Tomorrow\'s meal isn\'t prepped yet!';
const prep = 'Tomorrow\'s meal is ';
const headder = '--------------------------------------------------------';


var onceADay = '0 0 0 6 * *';
var every30Seconds = '30 * * * * *';
var j = schedule.scheduleJob(every30Seconds, function(){
    var fileNameArr = fs.readdirSync(dir);
    var fileName = fileNameArr[0];

    try{
        request.post(url).form({
            avatar_url: avatar_url, 
            username: name, 
            content: headder + "Get ready for tomorrow's recipe called " + fileNameArr[1].substring(0, fileNameArr[1].length - 4) + headder
        });
    }catch (e){
        request.post(url).form({
            avatar_url: avatar_url,
            username: name,
            content: headder + " Tomorrow's recipe isn't prepped yet " + headder,
        });
    }
    
    
    console.log();
    console.log(fileName);
    
    request.post(url).form({
        avatar_url: avatar_url, 
        username: name,
        content: fs.readFileSync(dir + fileName, function(err){
            if(err){
                console.log("Error on readFileSync");
                throw err;
            };
        }).toString('utf8')
    });

    fs.unlink(dir + fileName, function(err){
        if(err){
            console.log("Error on unlink");
            throw err;
        }
        console.log('File deleted: ' + fileName);
    });
});

