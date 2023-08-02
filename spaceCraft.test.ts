import { moveForward , Position , Command , Direction , rotateRight, moveUpward , moveBackward, rotateLeft} from "./spaceCraft";
import spaceCraft from "./spaceCraft";
describe("move forward", () => {
    it("it shold move forward to the space", () => {
        const currentPosition: Position = { x: 0, y: 0, z: 0 };
        const cord = moveForward(currentPosition,"N");
        expect(cord).toEqual({x:0,y:1,z:0}); 
    })
    it("it shold move forward to the space", () => {
        const currentPosition: Position = { x: 0, y: 1, z: 0 };
        const cord = moveForward(currentPosition,"N");
        expect(cord).toEqual({x:0,y:2,z:0}); 
    })
})
describe("rotate Right", () => {
    it("it shold rotate right",() => {
        const currentDirection:Direction = "N";
        const actualOutput  :  Direction = rotateRight(currentDirection);
        expect(actualOutput).toBe("E");
    })
});
describe("rotate Left", () => {
    it("it shold rotate left",() => {
        const currentDirection:Direction = "U";
        const actualOutput  :  Direction = rotateLeft(currentDirection);
        expect(actualOutput).toBe("W");
    })
    it("it shold rotate left",() => {
        const currentDirection:Direction = "E";
        const actualOutput  :  Direction = rotateLeft(currentDirection);
        expect(actualOutput).toBe("N");
    })
    it("it shold rotate north if prevDirection was east",() => {
        const currentDirection:Direction = "U";
        const actualOutput  :  Direction = rotateLeft(currentDirection , 'E');
        expect(actualOutput).toBe("W");
    })
});
describe("gotoUpward", () => {
    it("it shold rotate to upward",() => {
        const actualOutput  : Direction = moveUpward();
        expect(actualOutput).toBe("U");
    })
});

describe("gotoBackward", () => {
    it("it shold move to backward",() => {
        const actualOutput  : Position = moveBackward({ x: 0, y: 1, z: 0 },'U');
        expect(actualOutput).toEqual({ x: 0, y: 1, z: -1 });
    })
});

describe("spacecraft", () => {
    it("Should move forward in the same direction  Command-1", () => {
        const commands:Command[] = ["f"];
        const initialDirection = "N";
        const actualOutput: [Position,Direction] = spaceCraft(commands, initialDirection);
        expect(actualOutput).toEqual([ { x: 0, y: 1, z: 0 }, 'N' ]) 
    })
    it("should move forward and then rotate to the right Command-2", () => {
        const commands:Command[] = ["f", "r"];
        const initialDirection = "N";
        const actualOutput: [Position,Direction] = spaceCraft(commands, initialDirection);
        expect(actualOutput).toEqual([ { x: 0, y: 1, z: 0 }, 'E' ])
    })
    it("Should move forward and then rotate to the rigth and move to upward Command-3", () => {
        const commands:Command[] = ["f", "r", "u"];
        const initialDirection = "N";
        const actualOutput: [Position,Direction] = spaceCraft(commands, initialDirection);
        expect(actualOutput).toEqual([ { x: 0, y: 1, z: 0 }, 'U' ])
    })
    it("Should move backward Command-4", () => {
        const commands:Command[] = ["f", "r", "u", "b"];
        const initialDirection = "N";
        const actualOutput:  [Position,Direction]  = spaceCraft(commands,initialDirection);
        expect(actualOutput).toEqual([ { x: 0, y: 1, z: -1 }, 'U' ])
    })
    it("Should move spaceCraft to left direction Command-5", () => {
        const commands:Command[] = ["f", "r", "u", "b","l"];
        const initialDirection = "N";
        const actualOutput:  [Position,Direction]  = spaceCraft(commands,initialDirection);
        expect(actualOutput).toEqual([ { x: 0, y: 1, z: -1 }, 'W' ])
    })
    it("Should move spaceCraft to left direction Command-5", () => {
        const commands:Command[] = ["f", "r", "u", "b","l"];
        const initialDirection = "S";
        const actualOutput:  [Position,Direction]  = spaceCraft(commands,initialDirection);
        console.log(actualOutput);
        expect(actualOutput).toEqual([ { x: 0, y: 1, z: -1 }, 'E' ])
    })
})