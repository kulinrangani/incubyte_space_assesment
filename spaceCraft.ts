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

  moveForward(
    currentPosition: Position,
    currentDirection: Direction
  ): Position {
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

  rotateRight(
    currentDirection: Direction,
    prevDirection?: Direction
  ): Direction {
    switch (currentDirection) {
      case "U":
        currentDirection = prevDirection || "W";
        break;
      case "N":
        currentDirection = "E";
        break;
      case "E":
        currentDirection = "S";
        break;
      case "S":
        currentDirection = "W";
        break;
      case "W":
        currentDirection = "N";
        break;
    }
    return currentDirection;
  }

  moveUpward(): Direction {
    return "U";
  }

  moveBackward(
    currentPosition: Position,
    currentDirection: Direction
  ): Position {
    switch (currentDirection) {
      case "N":
        currentPosition = { ...currentPosition, y: currentPosition.y - 1 };
        break;
      case "E":
        currentPosition = { ...currentPosition, x: currentPosition.x - 1 };
        break;
      case "S":
        currentPosition = { ...currentPosition, y: currentPosition.y - 1 };
        break;
      case "W":
        currentPosition = { ...currentPosition, x: currentPosition.x - 1 };
        break;
      case "U":
        currentPosition = { ...currentPosition, z: currentPosition.z - 1 };
        break;
    }
    return currentPosition;
  }

  flipDirection(direction: Direction): Direction {
    if (direction == "W") {
      return "E";
    } else if (direction == "S") {
      return "N";
    } else if (direction == "E") {
      return "W";
    } else if (direction == "N") {
      return "S";
    } else {
      return "W";
    }
  }

  rotateLeft(
    currentDirection: Direction,
    prevDirection?: Direction
  ): Direction {
    switch (currentDirection) {
      case "U":
        currentDirection = this.flipDirection(
          prevDirection ? prevDirection : "U"
        );
        break;
      case "N":
        currentDirection = "W";
        break;
      case "W":
        currentDirection = "S";
        break;
      case "S":
        currentDirection = "E";
        break;
      case "E":
        currentDirection = "N";
        break;
    }
    return currentDirection;
  }

  executeCommands(
    commands: Command[],
    initialDirection: Direction
  ): [Position, Direction] {
    let currentPosition: Position = { x: 0, y: 0, z: 0 };
    let currentDirection: Direction = initialDirection;
    let prevDirection: Direction = initialDirection;
    for (let i = 0; i < commands.length; i++) {
      switch (commands[i]) {
        case "f":
          currentPosition = this.moveForward(currentPosition, currentDirection);
          break;
        case "r":
          currentDirection = this.rotateRight(currentDirection);
          break;
        case "u":
          currentDirection = this.moveUpward();
          break;
        case "b":
          currentPosition = this.moveBackward(
            currentPosition,
            currentDirection
          );
          break;
        case "l":
          currentDirection = this.rotateLeft(currentDirection);
          break;
      }
    }
    return [currentPosition, currentDirection];
  }
}
