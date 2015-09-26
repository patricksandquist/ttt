var TTT = require("./ttt/index");

var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var winning = function(winner) {
  console.log(winner + " has won!");
  reader.close();
};

var ttt = new TTT.Game(reader);
ttt.run(winning);
