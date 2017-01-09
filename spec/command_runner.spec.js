describe('CommandRunner', () => {
  var ToyRobot = require('../toy_robot');
  var CommandRunner = require('../command_runner');
  var robot;

  beforeEach(() => {
    robot = new ToyRobot(5, 5);
  });

  describe('invoking plain text instructions', () => {
    it('case a', () => {
      var str = 'PLACE 0,0,NORTH MOVE REPORT';
      CommandRunner.exec(robot, str);
      expect(robot.report()).toEqual('0,1,NORTH');
    });

    it('case b', () => {
      var str = 'PLACE 0,0,NORTH LEFT REPORT';
      CommandRunner.exec(robot, str);
      expect(robot.report()).toEqual('0,0,WEST');
    });

    it('case c', () => {
      var str = 'PLACE 1,2,EAST MOVE MOVE LEFT MOVE REPORT';
      CommandRunner.exec(robot, str);
      expect(robot.report()).toEqual('3,3,NORTH');
    });
  });
});
