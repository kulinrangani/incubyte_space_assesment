import { moveForward , Position} from "./spaceCraft";
describe("move forward", () => {
    it("it shold move forward to the space", () => {
        let currentPosition: Position = { x: 0, y: 0, z: 0 };
        const cord = moveForward(currentPosition,"N");
        expect(cord).toEqual({x:0,y:1,z:0}); 
    })
})