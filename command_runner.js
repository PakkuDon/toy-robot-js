module.exports = {
  exec: (robot, commandString) => {
    var tokens = commandString.split(/\s/);
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      switch (token) {
        case 'PLACE':
          var coordinates = tokens[++i].split(',');
          var x = parseInt(coordinates[0]);
          var y = parseInt(coordinates[1]);
          var direction = coordinates[2];
          robot.place(x, y, direction);
          break;
        case 'MOVE':
          robot.move();
          break;
        case 'LEFT':
          robot.left();
          break;
        case 'RIGHT':
          robot.right();
          break;
        case 'REPORT':
          console.log(robot.report());
          break;
      }
    }
  }
};
