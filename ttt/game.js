var Board = require("./board.js");

function Game (reader) {
  this.board = new Board();
  this.reader = reader;
  this.currentPlayer = "X";
}

Game.prototype = {

  run: function (callbackCompletion) {
    if(this.board.winner()) {
      callbackCompletion(this.board.winner());
    }
    else {
      this.board.print();
      var that = this;

      var callback = function(row, col, player) {
        var completeMove = that.board.placeMark(row, col, player);
        
        if (completeMove){
          that.run(callbackCompletion);
          that.switchPlayers();
        }
        else {
          console.log("Invalid move!");
          that.promptMove(callback);
        }
      };

      this.promptMove(callback);
    }
  },

  promptMove: function (callback) {
    console.log("It's " + this.currentPlayer + "'s turn!");

    var that = this;

    that.reader.question("Pick a row: ", function (row) {
      that.reader.question("Pick a column: ", function (column) {

        callback(parseInt(row), parseInt(column), that.currentPlayer);
      });
    });
  },

  switchPlayers: function() {
    if(this.currentPlayer === "X") { this.currentPlayer = "O"; }
    else { this.currentPlayer = "X"; }
  }
};

module.exports = Game;
