const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname, 'secret-folder');

fs.readdir(filePath, 'utf8', (err, files) => {
  if (err) throw err;    
  //example - txt - 128.369kb  
  for (let i in files){
    let name = filePath + '/' + files[i];
    fs.stat(name, function(err, stats){
      if (err) throw err;
      let extension = path.extname(files[i]);
      if(stats.isFile())
        console.log(` ${path.basename(files[i], extension)} - ${extension} - ${JSON.stringify(stats.size) / 1024} kb\n`);
    });     
  }
});