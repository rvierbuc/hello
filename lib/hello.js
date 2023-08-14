const { Greeter } = require('./greeter');

//Default is "World"
//Author: Alec Vierbuchen (ranlikerats@gmail.com)

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name`, (myName) => {
  const greeter = new Greeter(name);
  console.log(greeter.greet());

  rl.close();
});
