# Toy Robot

Practice coding test completed as part of Outcomes program. [Application spec here](https://github.com/PakkuDon/toy-robot-js/blob/master/toy_robot.md)

## Technology used
- JavaScript
- Node.js
- Jasmine

## Installation instructions
```
npm install
```

## Usage instructions
```
# Run tests
npm test
# Run program using input file
node app.js [file]
```

## Design
- Robot
  - Store current robot position and direction
  - Defines methods for updating position/direction
- CommandRunner
  - Parse commands from input string and invoke Robot methods

## Known issues
- ToyRobot.move() logic is hard-coded to four directions - does not scale well if more directions are added
  - Directions could be an object that contain x/y shifts
- Helper methods in ToyRobot module / validation logic could be abstracted out
- No test cases to check if commands before place command are ignored
- No input validation
