var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Tower () {
  this.stacks = [[3, 2, 1], [], []];
}

Tower.prototype = {
  isWon: function() {
    if(this.stacks[0].length === 0 &&
      (this.stacks[1].length === 0 || this.stacks[2].length === 0)) {
        return true;
      }
  },

  print: function() {
    console.log(JSON.stringify(this.stacks));
  },

  isValidMove: function(startTowerIdx, endTowerIdx) {
    if(this.stacks[startTowerIdx].length === 0) { return false; }
    if(this.stacks[endTowerIdx].length === 0) { return true; }
    if(this.stacks[startTowerIdx][this.stacks[startTowerIdx].length - 1] <
       this.stacks[endTowerIdx][this.stacks[endTowerIdx].length - 1] ) {
      return true;
    }
    else {
      return false;
    }
  },

  move: function(startTowerIdx, endTowerIdx) {
    if(this.isValidMove(startTowerIdx, endTowerIdx) === false) {
      // throw new Error("Invalid Move!");
      return false;
    }
    else {
      this.stacks[endTowerIdx].push(this.stacks[startTowerIdx].pop());
      return true;
    }
  },

  promptMove: function(callback) {
    this.print();
    reader.question("Take disc from tower: ", function (startTowerIdx) {
      reader.question("Move disc to tower: ", function (endTowerIdx) {

        var startIdx = parseInt(startTowerIdx);
        var endIdx = parseInt(endTowerIdx);

        callback(startIdx, endIdx);
      });
    });
  },

  run: function (completionCallback) {
    var that = this;

    var callBack = function(startIdx, endIdx) {
      var completeMove = that.move(startIdx, endIdx);
      
      if(!completeMove) {
        console.log("Invalid, move.");
        that.promptMove(callBack);
      }

      if (that.isWon()) {
        console.log("You won!");
        completionCallback();
      }
      else {
        that.run(completionCallback);
      }
    };

    this.promptMove(callBack);
  }
};

var Hanoi = new Tower();
Hanoi.run(function() { reader.close(); });
