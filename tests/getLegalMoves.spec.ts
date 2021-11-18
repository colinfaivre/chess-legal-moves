import getLegalMoves from "../src/index";
import { legalMovesFromstartingPosition } from "./startingPosition";
import {
    generatePosition,
    createPositionTable,
} from "../src/bitboard/positionsHashTable"

test("Testing 'getLegalMoves' function", () => {
    expect(getLegalMoves('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')).toStrictEqual({
        legalMoves: legalMovesFromstartingPosition,
        gameState: {
            isChecked: false,
            isCheckMated: false,
            isDraw: false,
        }
    });
});

test("Testing 'generatePosition' function", () => {
    expect(generatePosition(0)).toEqual('a1');
    expect(generatePosition(10)).toEqual('c2');
    expect(generatePosition(16)).toEqual('a3');
    expect(generatePosition(32)).toEqual('a5');
    expect(generatePosition(63)).toEqual('h8');
});

test("Testing 'generatePositionTable' function", () => {
    expect(createPositionTable()[0]).toEqual('a1');
    expect(createPositionTable()[10]).toEqual('c2');
    expect(createPositionTable()[16]).toEqual('a3');
    expect(createPositionTable()[32]).toEqual('a5')
    expect(createPositionTable()[63]).toEqual('h8');
});
