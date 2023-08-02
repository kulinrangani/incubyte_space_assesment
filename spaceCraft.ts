type Direction = 'N' | 'E' | 'S' | 'W';

export interface Position {
  x: number;
  y: number;
  z: number;
}
export const moveForward = (currentPosition: Position, currentDirection: Direction): Position => {
    switch (currentDirection) {
      case 'N':
        return { ...currentPosition, y: currentPosition.y + 1 };
      case 'E':
        return { ...currentPosition, x: currentPosition.x + 1 };
      case 'S':
        return { ...currentPosition, y: currentPosition.y - 1 };
      case 'W':
        return { ...currentPosition, x: currentPosition.x - 1 };
      default:
        return currentPosition;
    }
  }

