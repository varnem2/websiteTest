//static init message
const url = 'https://discordapp.com/api/webhooks/497504768898629632/TmfjDaibdHZM0zMBqiNRBHPad3j80bYxlCuQYMVU0Wkk7Tf31PWundOR4syXqhjBiTHl?wait=true';
const avatar_url = 'https://ih0.redbubble.net/image.436363942.7705/mp,550x550,matte,ffffff,t.3.jpg';
const name = "Recipie Bot";
const noPrep = 'Tomorrow\'s meal isn\'t prepped yet!';
const prep = 'Tomorrow\'s meal is ';
const headder = '--------------------------------------------------------';


//everything else
var request = require('request');
const repo = 'https://github.com/varnem2/effective-pancake.git';
var dir = __dirname + '/effective-pancake/';
const fs = require('fs');
var fileName = fs.readdirSync(dir);


let pullGitHub = new Promise((resolve, reject) => {
    const simpleGit = require('simple-git')().init().clone(repo);
});

let makePostToday = new Promise((resolve, reject) => {
    
    try{
        request.post(url).form({
            avatar_url: avatar_url,
            username: name,
            content: 
                headder + 
                prep + 
                fileName[0].substring(
                        0, 
                        fileName[0].length - 4) + headder
        })
    }catch(e){
        request.post(url).form({
            avatar_url: avatar_url,
            username: name,
            content:
                headder + noPrep + headder
        })
    }
    
    

});

let deleteLocalFile = new Promise((resolve, reject) => {
    
})

let makePostTomorrow = new Promise((resolve, reject) => {
    var fileName = fs.readdirSync(dir)[0];
    
})
