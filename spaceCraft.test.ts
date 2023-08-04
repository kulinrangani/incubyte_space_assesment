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

  describe("rotate Right", () => {
    it("it should rotate right", () => {
      const currentDirection: Direction = "N";
      const actualOutput: Direction = spaceCraft.rotateRight(currentDirection);
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

  });
});
