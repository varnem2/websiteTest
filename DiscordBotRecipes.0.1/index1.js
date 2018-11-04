/*var download = require('download-git-repo');

download('varnem2/effective-pancake', 'Recipies', function(err){
    console.log(err ? 'Error' : 'Success');
});
*/
const fs = require('fs');
const simpleGit = require('simple-git')()
    .init()
    .clone('https://github.com/varnem2/effective-pancake.git');




