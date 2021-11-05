const fs = require('fs');
const path = require('path');
const process = require('process');
const readline = require('readline');

let filePath = path.join(__dirname, 'text.txt');
let writeableStream = fs.createWriteStream(filePath);

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Hi, stranger! What do you want to tell me?');

rl.on('line', line => {  
  if (line.match(/exit/g)) {
    console.log('Buy-buy!');
    process.exit(0);
  }
  writeableStream.write(`${line}\n`); 
})
  .on('close', () => {
    console.log('Buy-buy!'); 
    process.exit(0);
  });