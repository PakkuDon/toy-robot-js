describe('ToyRobot', () => {
  var ToyRobot = require('../toy_robot');
  var robot;
  var width = 5;
  var height = 5;

  beforeEach(() => {
    robot = new ToyRobot(width, height);
  });

  describe('place', () => {
    it('can be placed on a board at a given location', () => {
      robot.place(0, 0, 'NORTH');
      expect(robot.report()).toEqual('0,0,NORTH');

      robot.place(1, 3, 'WEST');
      expect(robot.report()).toEqual('1,3,WEST');
    });

    it('will ignore invalid coordinates', () => {
      robot.place(10, 10, 'WEST');
      expect(robot.report()).toBeFalsy();

      robot.place(0, 4, 'bleh');
      expect(robot.report()).toBeFalsy();
    });
  });

  describe('move', () => {
    it('will ignore moves if it has not been placed', () => {
      robot.move();
      expect(robot.report()).toBeFalsy();
    });

    it('will move in its current direction', () => {
      robot.place(0, 0, 'NORTH');
      robot.move();
      expect(robot.report()).toEqual('0,1,NORTH');

      robot.place(3, 3, 'WEST');
      robot.move();
      robot.move();
      expect(robot.report()).toEqual('1,3,WEST');
    });

    it('will ignore moves that would cause it to fall', () => {
      robot.place(0, 0, 'SOUTH');
      robot.move();
      expect(robot.report()).toEqual('0,0,SOUTH');

      robot.place(0, 1, 'WEST');
      robot.move();
      expect(robot.report()).toEqual('0,1,WEST');

      robot.place(4, 3, 'NORTH');
      robot.move();
      robot.move();
      expect(robot.report()).toEqual('4,4,NORTH');
    });
  });

  describe('rotation', () => {
    describe('left', () => {
      it('should turn the robot counter-clockwise', () => {
        robot.place(0, 0, 'NORTH');
        robot.left();
        expect(robot.report()).toEqual('0,0,WEST');

        robot.left();
        expect(robot.report()).toEqual('0,0,SOUTH');

        robot.left();
        expect(robot.report()).toEqual('0,0,EAST');

        robot.left();
        expect(robot.report()).toEqual('0,0,NORTH');
      });
    });

    describe('right', () => {
      it('should turn the robot clockwise', () => {
        robot.place(0, 0, 'SOUTH');
        robot.right();
        expect(robot.report()).toEqual('0,0,WEST');
      });
    });
  });
});
