import Game from "../src/index";
import {
    legalMovesFromstartingPosition,
    legalMovesKnight,
} from "./startingPosition";
import {
    generatePosition,
    createPositionTable,
} from "../src/bitboard/positionsHashTable"

test("getLegalMoves() | starting position", () => {
    const game = new Game('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
    expect(game.legalMoves).toStrictEqual(legalMovesFromstartingPosition);
    expect(game.gameState).toStrictEqual({
        isChecked: false,
        isCheckMated: false,
        isDraw: false,
    });
});

test("getLegalMoves() | knight", () => {
    const game = new Game('8/8/8/8/8/4n3/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
    expect(game.legalMoves).toStrictEqual(legalMovesKnight);
    expect(game.gameState).toStrictEqual({
        isChecked: false,
        isCheckMated: false,
        isDraw: false,
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


test("addMove() | addMove", () => {
    const game = new Game('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    expect(game.addMove('a2a4')).toStrictEqual('rnbqkbnr/pppppppp/8/8/P7/8/.PPPPPPP/RNBQKBNR b KQkq a3 0 1');
});
