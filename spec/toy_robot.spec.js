describe('ToyRobot', () => {
  var ToyRobot = require('../toy_robot.js');
  var robot;

  beforeEach(() => {
    robot = new ToyRobot(5, 5);
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
  })
});
