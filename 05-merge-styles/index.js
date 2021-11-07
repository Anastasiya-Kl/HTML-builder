const fs = require('fs');
const path = require('path');

let stylesPath = path.join(__dirname, 'styles');
let bundlePath = path.join(__dirname, 'project-dist/bundle.css');
let writeableStream = fs.createWriteStream(bundlePath);

fs.readdir(stylesPath, 'utf8', (err, files) => {
  if (err) throw err;    
  for (let i in files){
    let name = stylesPath + '/' + files[i];
    let readableStream = fs.createReadStream(name,'utf8');
    fs.stat(name, function(err, stats){
      if (err) throw err;
      let extension = path.extname(files[i]);
      if(stats.isFile() && extension == '.css')
        readableStream.pipe(writeableStream);
    });     
  }
});