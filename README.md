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
