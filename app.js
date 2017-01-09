var fs = require('fs');
var ToyRobot = require('./toy_robot');
var CommandRunner = require('./command_runner');
var robot = new ToyRobot(5, 5);

var file = process.argv[2];

// Print usage string
if (!file) {
  console.log('usage');
  console.log(`\tnode app.js [input_file]`);
  process.exit(1);
}

// Execute commands from file
fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    throw err;
  }

  CommandRunner.exec(robot, data);
});
