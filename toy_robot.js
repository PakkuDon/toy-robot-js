// Constructor
var ToyRobot = function(width, height) {
  this.width = width;
  this.height = height;
}

// Put robot at given coordinates facing direction
ToyRobot.prototype.place = function(x, y, direction) {
  this.x = x;
  this.y = y;
  this.direction = direction;
}

// Check if robot has been placed
ToyRobot.prototype.isPlaced = function() {
  return typeof this.x !== 'undefined' &&
    typeof this.y !== 'undefined' &&
    typeof this.direction !== 'undefined';
}

// Return robot's current location and direction
ToyRobot.prototype.report = function() {
  if (this.isPlaced()) {
    return `${this.x},${this.y},${this.direction}`;
  }
}

module.exports = ToyRobot;
