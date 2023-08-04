# Chandrayaan 3 TDD Assessment

It is Spacecraft program which is developed with Test Driven Development in Typescript where we send the commands and it will move accordingly and sent back coordinates and positions.

## Description

As a scientist at ISRO controlling the latest lunar spacecraft Chandrayaan 3, your task is to develop a program that translates commands sent from Earth into instructions understood by the spacecraft. The spacecraft navigates through the galaxy using galactic coordinates, represented by x, y, z coordinates (x for east or west location, y for north or south location, and z for distance above or below the galactic plane).

## Requirements

You will be given the initial starting point (x, y, z) of the spacecraft and the direction it is facing (N, S, E, W, Up, Down). The spacecraft receives a character array of commands, and you are required to implement the following functionalities:

1.Move the spacecraft forward/backward (f, b): The spacecraft moves one step forward or backward based on its current direction.
2.Turn the spacecraft left/right (l, r): The spacecraft rotates 90 degrees to the left or right, changing its facing direction.
3.Turn the spacecraft up/down (u, d): The spacecraft changes its angle, rotating upwards or downwards.

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

**rotateRight(currentDirection: Direction , previousDirection? : Direction ):** This method will rotate the Spacecraft in right direction and return the current direction.

**rotateLeft(currentDirection: Direction , previousDirection? : Direction ):** This method will rotate the Spacecraft in left direction and return the current direction.

**moveUpward():** This method will move the Spacecraft to upward direction and return the current direction.

**flipDirection():** This method will flip the Spacecraft to oppositeDirection and return the current direction.

## Custom types

**interface :Position** This interface has object with three cords x(for East ANd West) and y(for North and South) and z (for up and down to the galactic plane) with the datatype number.

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
