export type Direction = "N" | "E" | "S" | "W" | "U" | "B";
export type Command = "f" | "r" | "u" | "b" | "l";

export interface Position {
  x: number;
  y: number;
  z: number;
}
export class SpaceCraft {
  currentPosition: Position;
  currentDirection: Direction;
  prevDirection: Direction;

  moveForward(currentPosition : Position,currentDirection : Direction) :Position  {
    switch (currentDirection) {
      case "N":
        currentPosition = { ...currentPosition, y: currentPosition.y + 1 };
        break;
      case "E":
        currentPosition = { ...currentPosition, x: currentPosition.x + 1 };
        break;
      case "S":
        currentPosition = { ...currentPosition, y: currentPosition.y + 1 };
        break;
      case "W":
        currentPosition = { ...currentPosition, x: currentPosition.x + 1 };
        break;
    }
    return currentPosition;
  }
}