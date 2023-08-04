# Chandrayaan 3 TDD Assessment

It is Space craft programm which is developed with Test Driven Development in Typescript where we send the commands and it will move acordingly and sentback cordinates and positions.

## Class

**SpaceCraft**
Properties of the class are:
currentPosition: Position
currentDirection: Direction;
prevDirection: Direction;

## Methods

**executeCommands(commands: Command[] , initialDirection : Direction):** This method will takes commands of type array and position and executes commands one by one and returns current position and direction.

**moveForward(currentPosition: Position,currentDirection: Direction):** This method move forward the SpaceCraft in current direction and return current position.

**moveBackward(currentPosition: Position,currentDirection: Direction):** This method move backward the SpaceCraft in current direction and return current position.

**rotateRight(currentDirection: Direction , previousDirection? : Direction ):** This method will rotate the space craft in right direction and return the current direction.

**rotateLeft(currentDirection: Direction , previousDirection? : Direction ):** This method will rotate the space craft in left direction and return the current direction.

**moveUpward():** This method will move the space craft to upward direction and return the current direction.

**flipDirection():** This method will flip the space craft to oppositeDirection and return the current direction.

## Custome types

**interface :Position** This interface has object with three cords x(for East ANd West) and y(for North and South) and z (for up and down to the galastic plane) with the datatype number.

**Type Aliases** We have two different types for Command and Direction.

## How To Setup.

```
npm install
npm config ts-jest config:init
```

### To Run the test Suite

```
In Terminal run the following command:
jest
```

## Examples

### The executeCommands Method of class will does following

```
const commands: Command[] = ["f", "r"];
const initialDirection = "N";
const actualOutput: [Position, Direction] = spaceCraft.executeCommands(commands,initialDirection);
console.log(actualOutput); //[{ x: 0, y: 1, z: 0 }, "E"]
```

```
const commands: Command[] = ["f", "r", "u"];
const initialDirection = "N";
const actualOutput: [Position, Direction] = spaceCraft.executeCommands(commands,initialDirection);
console.log(actualOutput); //[{ x: 0, y: 1, z: 0 }, "U"]
```
