// Constructor
var ToyRobot = function(width, height) {
  this.width = width;
  this.height = height;
}

// Helpers
const directions = [
  'NORTH',
  'EAST',
  'SOUTH',
  'WEST'
];

var isBetween = function(value, min, max) {
  return value >= min && value < max;
}

var isValidDirection = function(direction) {
  return directions.includes(direction);
}

// Put robot at given coordinates facing direction
ToyRobot.prototype.place = function(x, y, direction) {
  if (isBetween(x, 0, this.width) &&
    isBetween(y, 0, this.height) &&
    isValidDirection(direction))
  {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }
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

// Move one tile forward in current direction
// Ignore moves that will cause robot to fall
ToyRobot.prototype.move = function() {
  if (!this.isPlaced()) {
    return;
  }

  switch (this.direction) {
    case 'NORTH':
      if (this.y < this.height - 1) {
        this.y++;
      }
      break;
    case 'SOUTH':
      if (this.y > 0) {
        this.y--;
      }
      break;
    case 'EAST':
      if (this.x < this.width - 1) {
        this.x++;
      }
      break;
    case 'WEST':
      if (this.x > 0) {
        this.x--;
      }
      break;
  }
}

// Turn robot counter-clockwise
ToyRobot.prototype.left = function() {
  var index = directions.indexOf(this.direction) - 1;
  if (index < 0) {
    index = directions.length - 1;
  }
  this.direction = directions[index];
}

// Turn robot clockwise
ToyRobot.prototype.right = function() {
  var index = (directions.indexOf(this.direction) + 1) % directions.length;
  this.direction = directions[index];
}

module.exports = ToyRobot;
