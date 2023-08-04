export type Direction = "N" | "E" | "S" | "W" | "U" | "B";
export type Command = "f" | "r" | "u" | "b" | "l";
export interface Position {
  x: number;
  y: number;
  z: number;
}
export const moveForward = (
  currentPosition: Position,
  currentDirection: Direction
): Position => {
  switch (currentDirection) {
    case "N":
      return { ...currentPosition, y: currentPosition.y + 1 };
    case "E":
      return { ...currentPosition, x: currentPosition.x + 1 };
    case "S":
      return { ...currentPosition, y: currentPosition.y + 1 };
    case "W":
      return { ...currentPosition, x: currentPosition.x + 1 };
    default:
      return currentPosition;
  }
};

export const moveBackward = (
  currentPosition: Position,
  currentDirection: Direction
): Position => {
  switch (currentDirection) {
    case "N":
      return { ...currentPosition, y: currentPosition.y - 1 };
    case "E":
      return { ...currentPosition, x: currentPosition.x - 1 };
    case "S":
      return { ...currentPosition, y: currentPosition.y - 1 };
    case "W":
      return { ...currentPosition, x: currentPosition.x - 1 };
    case "U":
      return { ...currentPosition, z: currentPosition.z - 1 };
    default:
      return currentPosition;
  }
};

export const rotateRight = (
  currentDirection: Direction,
  prevDirection?: Direction
): Direction => {
  switch (currentDirection) {
    case "U":
      return prevDirection || 'W'; 
    case "N":
      return "E";
    case "E":
      return "S";
    case "S":
      return "W";
    case "W":
      return "N";
    default:
      return currentDirection;
  }
};

export const flipDirection = (direction : Direction) :Direction =>{
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

export const rotateLeft = (
  currentDirection: Direction,
  prevDirection?: Direction
): Direction => {
  switch (currentDirection) {
    case "U":
        return flipDirection(prevDirection? prevDirection : 'U');
    case "N":
      return "W";
    case "W":
      return "S";
    case "S":
      return "E";
    case "E":
      return "N";
    default:
      return currentDirection;
  }
};

export const moveUpward = (): Direction => {
  const directionWillBe: Direction = "U";
  return directionWillBe;
};

export default function spaceCraft(
  commands: Command[],
  initialDirection: Direction
): [Position, Direction] {
  let currentPosition: Position = { x: 0, y: 0, z: 0 };
  let currentDirection: Direction = initialDirection;
  let prevDirection: Direction = initialDirection;
  // console.log(commands);
  for (let i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      case "f":
        currentPosition = moveForward(currentPosition, currentDirection);
        break;
      case "r":
        currentDirection = rotateRight(currentDirection, prevDirection);
        break;
      case "u":
        prevDirection = currentDirection;
        currentDirection = moveUpward();
        break;
      case "b":
        currentPosition = moveBackward(currentPosition, currentDirection);
        break;
      case "l":
        currentDirection = rotateLeft(currentDirection, prevDirection);
        break;
    }
  }
  return [currentPosition, currentDirection];
}
