function Board () {
  this.grid = [["_", "_", "_"],["_", "_", "_"],["_", "_", "_"]];
}

Board.prototype = {

  winner: function() {
    for(var i=0; i<3; i++){
      if(this.grid[i][0] === this.grid[i][1] &&
         this.grid[i][1] === this.grid[i][2] && this.grid[i][0] !== "_") {
        return this.grid[i][0];
      }
    }
    for(i=0; i<3; i++){
      if(this.grid[0][i] === this.grid[1][i] &&
         this.grid[1][i] === this.grid[2][i] && this.grid[0][i] !== "_") {
        return this.grid[0][i];
      }
    }
    if(this.grid[0][0] === this.grid[1][1] &&
       this.grid[1][1] === this.grid[2][2] && this.grid[0][0] !== "_") {
      return this.grid[0][0];
    }
    if(this.grid[2][0] === this.grid[1][1] &&
       this.grid[1][1] === this.grid[0][2] && this.grid[2][0] !== "_") {
      return this.grid[2][0];
    }

    return false;
  },

  empty: function(p1, p2) {
    return (this.grid[p1][p2] === "_");
  },

  placeMark: function(p1, p2, mark) {
    if (p1 < 0 || p1 > 2 || p2 < 0 || p2 > 2) {
      return false;
    }
    console.log(p1 + ":" + p2 + ":" + mark);
    if(!this.empty) { return false; }
    else {
      this.grid[p1][p2] = mark;
      return true;
    }
  },

  print: function() {
    console.log("\033c");
    console.log(this.grid[0][0] + "|" + this.grid[0][1] + "|" + this.grid[0][2]);
    console.log(this.grid[1][0] + "|" + this.grid[1][1] + "|" + this.grid[1][2]);
    console.log(this.grid[2][0] + "|" + this.grid[2][1] + "|" + this.grid[2][2]);
  }
};

module.exports = Board;
