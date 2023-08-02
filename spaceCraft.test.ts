import { moveForward , Position , Command , Direction , rotateRight} from "./spaceCraft";
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

describe("spacecraft", () => {
    it("Should move forward in the same direction", () => {
        const commands:Command[] = ["f"];
        const initialDirection = "N";
        const actualOutput: [Position,Direction] = spaceCraft(commands, initialDirection);
        expect(actualOutput).toEqual([ { x: 0, y: 1, z: 0 }, 'N' ]) 
    })
})