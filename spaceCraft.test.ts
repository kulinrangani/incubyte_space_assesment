import { SpaceCraft } from "./spaceCraft";
import { Direction, Position, Command } from "./spaceCraft";

describe("SpaceCraft", () => {
  let spaceCraft: SpaceCraft;
  beforeAll(() => {
    spaceCraft = new SpaceCraft();
  });

  describe("move forward", () => {
    it("shold move forward to the space", () => {
      const currentPosition: Position = { x: 0, y: 0, z: 0 };
      const cord = spaceCraft.moveForward(currentPosition, "N");
      expect(cord).toEqual({ x: 0, y: 1, z: 0 });
    });
  });

  describe("rotateRight", () => {
    it("should rotate right", () => {
      const currentDirection: Direction = "N";
      const actualOutput: Direction = spaceCraft.rotateRight(currentDirection);
      expect(actualOutput).toBe("E");
    });
  });

  describe("rotateLeft", () => {
    it("should rotate left", () => {
      const currentDirection: Direction = "N";
      const actualOutput: Direction = spaceCraft.rotateLeft(currentDirection);
      expect(actualOutput).toBe("W");
    });
  });

  describe("moveUpward", () => {
    it("shold rotate to upward", () => {
      const actualOutput: Direction = spaceCraft.moveUpward();
      expect(actualOutput).toBe("U");
    });
  });

  describe("moveBackward", () => {
    it("it shold move to backward", () => {
      const actualOutput: Position = spaceCraft.moveBackward(
        { x: 0, y: 1, z: 0 },
        "U"
      );
      expect(actualOutput).toEqual({ x: 0, y: 1, z: -1 });
    });
  });

  describe("flipDirection", () => {
    it("should flip the direction", () => {
      const actualOutput: Direction = spaceCraft.flipDirection("W");
      expect(actualOutput).toBe("E");
    });
  });

  describe("execute commands", () => {
    it("should execute commands-1", () => {
      const commands: Command[] = ["f"];
      const initialDirection = "N";
      const actualOutput: [Position, Direction] = spaceCraft.executeCommands(
        commands,
        initialDirection
      );
      expect(actualOutput).toEqual([{ x: 0, y: 1, z: 0 }, "N"]);
    });

    it("should move forward and then rotate to the right Command-2", () => {
      const commands: Command[] = ["f", "r"];
      const initialDirection = "N";
      const actualOutput: [Position, Direction] = spaceCraft.executeCommands(
        commands,
        initialDirection
      );
      expect(actualOutput).toEqual([{ x: 0, y: 1, z: 0 }, "E"]);
    });

    it("Should move forward and then rotate to the rigth and move to upward Command-3", () => {
      const commands: Command[] = ["f", "r", "u"];
      const initialDirection = "N";
      const actualOutput: [Position, Direction] = spaceCraft.executeCommands(
        commands,
        initialDirection
      );
      expect(actualOutput).toEqual([{ x: 0, y: 1, z: 0 }, "U"]);
    });

    it("Should move backward Command-4", () => {
      const commands: Command[] = ["f", "r", "u", "b"];
      const initialDirection = "N";
      const actualOutput: [Position, Direction] = spaceCraft.executeCommands(
        commands,
        initialDirection
      );
      expect(actualOutput).toEqual([{ x: 0, y: 1, z: -1 }, "U"]);
    });

    it("Should move spaceCraft to left direction Command-5", () => {
      const commands: Command[] = ["f", "r", "u", "b", "l"];
      const initialDirection = "N";
      const actualOutput: [Position, Direction] = spaceCraft.executeCommands(
        commands,
        initialDirection
      );
      expect(actualOutput).toEqual([{ x: 0, y: 1, z: -1 }, "W"]);
    });
    
  });
});
