function Clock () {
  this.currentTime = null;
}

Clock.TICK = 5000;

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  console.log(this.currentTime.getUTCHours() + ":" +
              this.currentTime.getUTCMinutes() + ":" +
              this.currentTime.getUTCSeconds());
};

Clock.prototype.run = function () {
  // 1. Set the currentTime.
  // 2. Call printTime.
  // 3. Schedule the tick interval.
  this.currentTime = new Date();
  this.printTime();
  var that = this;
  var callback = function() {
    setTimeout(that._tick.bind(that), Clock.TICK);
  };

  setInterval(callback, Clock.TICK);
};

Clock.prototype._tick = function () {
  // 1. Increment the currentTime.
  this.currentTime.setTime(this.currentTime.getTime() + Clock.TICK);
  // 2. Call printTime.
  this.printTime();
};

var clock = new Clock();
clock.run();
