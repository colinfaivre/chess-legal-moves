import createNewGameState, {
    updateFenBoard,
    isPawn,
    isCapture,
    incrementFullMoveClock,
    incrementHalfMoveClock,
    toggleHasToPlay,
    updateAvailableCastlings
} from "../../../src/createNewGameState/createNewGameState";

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

test("createNewGameState() | k castling", () => {
    const gameState = {
        fenBoard: 'r3k2r/8/8/8/8/8/8/R3K2R',
        hasToPlay: 'b',
        availableCastlings: 'KQkq',
        enPassantTarget: '-',
        halfMoveClock: 0,
        fullMoveClock: 1,
    };
    const received = createNewGameState('e8g8', gameState);
    const expected = {
        fenBoard: 'r4rk./8/8/8/8/8/8/R3K2R',
        hasToPlay: 'w',
        availableCastlings: 'KQ',
        enPassantTarget: '-',
        halfMoveClock: 1,
        fullMoveClock: 2,
    };
    expect(received).toStrictEqual(expected);
});

test("createNewGameState() | q castling", () => {
    const gameState = {
        fenBoard: 'r3k2r/8/8/8/8/8/8/R3K2R',
        hasToPlay: 'b',
        availableCastlings: 'kq',
        enPassantTarget: '-',
        halfMoveClock: 0,
        fullMoveClock: 1,
    };
    const received = createNewGameState('e8c8', gameState);
    const expected = {
        fenBoard: '2kr3r/8/8/8/8/8/8/R3K2R',
        hasToPlay: 'w',
        availableCastlings: '-',
        enPassantTarget: '-',
        halfMoveClock: 1,
        fullMoveClock: 2,
    };
    expect(received).toStrictEqual(expected);
});

test("createNewGameState() | K castling", () => {
    const gameState = {
        fenBoard: 'r3k2r/8/8/8/8/8/8/R3K2R',
        hasToPlay: 'w',
        availableCastlings: 'KQkq',
        enPassantTarget: '-',
        halfMoveClock: 0,
        fullMoveClock: 1,
    };
    const received = createNewGameState('e1g1', gameState);
    const expected = {
        fenBoard: 'r3k2r/8/8/8/8/8/8/R4RK.',
        hasToPlay: 'b',
        availableCastlings: 'kq',
        enPassantTarget: '-',
        halfMoveClock: 1,
        fullMoveClock: 1,
    };
    expect(received).toStrictEqual(expected);
});

test("createNewGameState() | Q castling", () => {
    const gameState = {
        fenBoard: 'r3k2r/8/8/8/8/8/8/R3K2R',
        hasToPlay: 'w',
        availableCastlings: 'KQ',
        enPassantTarget: '-',
        halfMoveClock: 0,
        fullMoveClock: 1,
    };
    const received = createNewGameState('e1c1', gameState);
    const expected = {
        fenBoard: 'r3k2r/8/8/8/8/8/8/2KR3R',
        hasToPlay: 'b',
        availableCastlings: '-',
        enPassantTarget: '-',
        halfMoveClock: 1,
        fullMoveClock: 1,
    };
    expect(received).toStrictEqual(expected);
});

test("createNewGameState() | Q promotion move", () => {
    const gameState = {
        fenBoard: '8/P7/8/8/8/8/8/8',
        hasToPlay: 'w',
        availableCastlings: 'KQkq',
        enPassantTarget: '-',
        halfMoveClock: 0,
        fullMoveClock: 1,
    };
    const received = createNewGameState('a7a8Q', gameState);
    const expected = {
        fenBoard: 'Q7/8/8/8/8/8/8/8',
        hasToPlay: 'b',
        availableCastlings: 'KQkq',
        enPassantTarget: '-',
        halfMoveClock: 0,
        fullMoveClock: 1,
    };
    expect(received).toStrictEqual(expected);
});

test("createNewGameState() | N promotion move", () => {
    const gameState = {
        fenBoard: '8/7P/8/8/8/8/8/8',
        hasToPlay: 'w',
        availableCastlings: 'KQkq',
        enPassantTarget: '-',
        halfMoveClock: 0,
        fullMoveClock: 1,
    };
    const received = createNewGameState('h7h8N', gameState);
    const expected = {
        fenBoard: '7N/8/8/8/8/8/8/8',
        hasToPlay: 'b',
        availableCastlings: 'KQkq',
        enPassantTarget: '-',
        halfMoveClock: 0,
        fullMoveClock: 1,
    };
    expect(received).toStrictEqual(expected);
});

test("createNewGameState() | b promotion move", () => {
    const gameState = {
        fenBoard: '8/8/8/8/8/8/p7/8',
        hasToPlay: 'b',
        availableCastlings: 'KQkq',
        enPassantTarget: '-',
        halfMoveClock: 0,
        fullMoveClock: 1,
    };
    const received = createNewGameState('a2a1b', gameState);
    const expected = {
        fenBoard: '8/8/8/8/8/8/8/b7',
        hasToPlay: 'w',
        availableCastlings: 'KQkq',
        enPassantTarget: '-',
        halfMoveClock: 0,
        fullMoveClock: 2,
    };
    expect(received).toStrictEqual(expected);
});

test("createNewGameState() | r promotion move", () => {
    const gameState = {
        fenBoard: '8/8/8/8/8/8/7p/8',
        hasToPlay: 'b',
        availableCastlings: 'KQkq',
        enPassantTarget: '-',
        halfMoveClock: 0,
        fullMoveClock: 1,
    };
    const received = createNewGameState('h2h1r', gameState);
    const expected = {
        fenBoard: '8/8/8/8/8/8/8/7r',
        hasToPlay: 'w',
        availableCastlings: 'KQkq',
        enPassantTarget: '-',
        halfMoveClock: 0,
        fullMoveClock: 2,
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
});

test("updateFenBoard()", () => {
    const received = updateFenBoard('rnbqkbnr/pppppppp/8/8/P7/8/.PPPPPPP/RNBQKBNR');
    const expected = 'rnbqkbnr/pppppppp/8/8/P7/8/.PPPPPPP/RNBQKBNR';

    expect(received).toBe(expected);
});

test("incrementFullMoveClock()", () => {
    const received = incrementFullMoveClock(1);
    const expected = 2;

    expect(received).toBe(expected);
});

test("incrementHalfMoveClock()", () => {
    const received = incrementHalfMoveClock(1);
    const expected = 2;

    expect(received).toBe(expected);
});

test("toggleHasToPlay() | w", () => {
    const received = toggleHasToPlay("w");
    const expected = "b";

    expect(received).toBe(expected);
});

test("toggleHasToPlay() | b", () => {
    const received = toggleHasToPlay("b");
    const expected = "w";

    expect(received).toBe(expected);
});

test("updateAvailableCastlings() | K", () => {
    const received1 = updateAvailableCastlings('KQkq', 'K');
    const expected1 = 'kq';

    expect(received1).toBe(expected1);

    const received2 = updateAvailableCastlings('KQ', 'K');
    const expected2 = '-';

    expect(received2).toBe(expected2);
});

test("updateAvailableCastlings() | Q", () => {
    const received1 = updateAvailableCastlings('KQkq', 'Q');
    const expected1 = 'kq';

    expect(received1).toBe(expected1);

    const received2 = updateAvailableCastlings('KQ', 'Q');
    const expected2 = '-';

    expect(received2).toBe(expected2);
});

test("updateAvailableCastlings() | k", () => {
    const received1 = updateAvailableCastlings('KQkq', 'k');
    const expected1 = 'KQ';

    expect(received1).toBe(expected1);

    const received2 = updateAvailableCastlings('kq', 'k');
    const expected2 = '-';

    expect(received2).toBe(expected2);
});

test("updateAvailableCastlings() | q", () => {
    const received1 = updateAvailableCastlings('KQkq', 'q');
    const expected1 = 'KQ';

    expect(received1).toBe(expected1);

    const received2 = updateAvailableCastlings('kq', 'q');
    const expected2 = '-';

    expect(received2).toBe(expected2);
});