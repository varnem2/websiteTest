var request = require('request');
var schedule = require('node-schedule');
const fs = require('fs');
const url = 'https://discordapp.com/api/webhooks/510543389725294592/_s73eyuZ9wwuclIWPJL4ar7nGlDr-8EpSHR1pk1RZSBzTa-2tN64rX5_rrVDFkQHro61';
const avatar_url = 'https://ih0.redbubble.net/image.436363942.7705/mp,550x550,matte,ffffff,t.3.jpg';
const name = "Recipie Bot";
//var dir = 'C:/Users/dash/Documents/10SFG Recipies/';
var dir = __dirname + '/effective-pancake/';
const noPrep = 'Tomorrow\'s meal isn\'t prepped yet!';
const prep = 'Tomorrow\'s meal is ';
const headder = '----------------------------------------------------------------';


function sleep(delay){
    var start = new Date().getTime();
    while(new Date().getTime() < start + delay);
}
console.log(new Date().getSeconds());
sleep(10);
console.log(new Date().getMilliseconds());

var fourpm = '0 0 40 3 * *';
var every30Seconds = '30 * * * * *';

var rule = new schedule.RecurrenceRule();
//rule.minute = 54;
rule.second = [0, 10, 20, 30, 40, 50]
rule.dayOfWeek = new schedule.Range(0,6);

console.log("Start scheule");
var j = schedule.scheduleJob(rule, function(){
    console.log("Testing123");
    console.log(new Date().getTime());
});


//var onceADay = '0 0 0 6 * *';
//var every30Seconds = '30 * * * * *';
//var j = schedule.scheduleJob(every30Seconds, function(){
    var fileNameArr = fs.readdirSync(dir);
    var fileName = fileNameArr[1];

    try{
        request.post(url).form({
            avatar_url: avatar_url, 
            username: name, 
            content: headder + "Get ready for tomorrow's recipe called " + fileNameArr[2].substring(0, fileNameArr[2].length - 4) + headder
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
//});


