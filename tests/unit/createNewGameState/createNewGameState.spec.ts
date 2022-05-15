import createNewGameState from "../../../src/createNewGameState/createNewGameState";
import { isPawn, isCapture } from "../../../src/createNewGameState/createNewGameState";

test("createNewGameState() | a2a4", () => {
    const gameState = {
        fenBoard: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
        hasToPlay: 'w',
        availableCastlings: 'KQkq',
        enPassantTarget: '-',
        halfMoveClock: 0,
        fullMoveClock: 1,
    };
    const received = createNewGameState('a2a4', gameState);
    const expected = {
        fenBoard: 'rnbqkbnr/pppppppp/8/8/P7/8/.PPPPPPP/RNBQKBNR',
        hasToPlay: 'b',
        availableCastlings: 'KQkq',
        enPassantTarget: 'a3',
        halfMoveClock: 0,
        fullMoveClock: 1,
    };

    expect(received).toStrictEqual(expected);
});

test("createNewGameState() | h2h4", () => {
    const gameState = {
        fenBoard: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
        hasToPlay: 'w',
        availableCastlings: 'KQkq',
        enPassantTarget: '-',
        halfMoveClock: 0,
        fullMoveClock: 1,
    };
    const received = createNewGameState('h2h4', gameState);
    const expected = {
        fenBoard: 'rnbqkbnr/pppppppp/8/8/7P/8/PPPPPPP./RNBQKBNR',
        hasToPlay: 'b',
        availableCastlings: 'KQkq',
        enPassantTarget: 'h3',
        halfMoveClock: 0,
        fullMoveClock: 1,
    };
    expect(received).toStrictEqual(expected);
});

test("isPawn() | pawn", () => {
    const received1 = isPawn('p');
    const received2 = isPawn('P');

    expect(received1).toBe(true);
    expect(received2).toBe(true);
});

test("isPawn() | not pawn", () => {
    const received1 = isPawn('x');
    const received2 = isPawn('');

    expect(received1).toBe(false);
    expect(received2).toBe(false);
});

test("isCapture() | capture", () => {
    const received1 = isCapture('p', 'P');
    const received2 = isCapture('Q', 'n');

    expect(received1).toBe(true);
    expect(received2).toBe(true);
});

test("isCapture() | not capture", () => {
    const received1 = isCapture('K', '.');
    const received2 = isCapture('p', '.');

    expect(received1).toBe(false);
    expect(received2).toBe(false);
})