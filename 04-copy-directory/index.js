const fs = require('fs');
const path = require('path');

let filesPath = path.join(__dirname, 'files-copy');

fs.mkdir(filesPath, { recursive: true }, (err) => {
  if (err) throw err;  
});

let firstPath = path.join(__dirname, 'files');

function callback(err) {
  if (err) throw err;  
}

fs.readdir(firstPath, 'utf8', (err, files) => {
  if (err) throw err;    
  for (let i in files){
    let name = firstPath + '/' + files[i];
    let copyName = filesPath + '/' + files[i];      
    fs.copyFile(name, copyName, callback);
  }
});