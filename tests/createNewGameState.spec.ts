import createNewGameState from "../src/game/createNewGameState/createNewGameState";
import { isPawn, isCapture } from "../src/game/createNewGameState/createNewGameState";
import { parseBoard } from "../src/game/createNewGameState/parseBoard";
import { getRanks } from "../src/game/createNewGameState/parseBoard";
import { getRankCells } from "../src/game/createNewGameState/parseBoard";
import { convertNumbersToPoints } from "../src/game/createNewGameState/parseBoard";
import { composeBoardArrayToString } from "../src/game/createNewGameState/composeBoardArrayToString";
import { convertPointsToNumbers } from "../src/game/createNewGameState/composeBoardArrayToString";
import { parseMove } from "../src/game/createNewGameState/parseMove";
import { mapPositionToBoardIndex } from "../src/game/createNewGameState/parseMove";

test("createNewGameState() | a2a4", () => {
    const updatedFenBoard = createNewGameState('a2a4', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');
    expect(updatedFenBoard).toStrictEqual({
        fenBoard: 'rnbqkbnr/pppppppp/8/8/P7/8/.PPPPPPP/RNBQKBNR',
        enPassantTarget: "a3",
    })
});

test("createNewGameState() | h2h4", () => {
    const updatedFenBoard = createNewGameState('h2h4', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');
    expect(updatedFenBoard).toStrictEqual({
        fenBoard: 'rnbqkbnr/pppppppp/8/8/7P/8/PPPPPPP./RNBQKBNR',
        enPassantTarget: "h3",
    })
});

test("parseBoard()", () => {
    const received = parseBoard('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');
    const expected = [
        'R','N','B','Q','K','B','N','R',
        'P','P','P','P','P','P','P','P',
        '.','.','.','.','.','.','.','.',
        '.','.','.','.','.','.','.','.',
        '.','.','.','.','.','.','.','.',
        '.','.','.','.','.','.','.','.',
        'p','p','p','p','p','p','p','p',
        'r','n','b','q','k','b','n','r',
    ];

    expect(received).toStrictEqual(expected);
});

test("composeBoardArrayToString()", () => {
    const received = composeBoardArrayToString([
        'R','N','B','Q','K','B','N','R',
        'P','P','P','P','P','P','P','P',
        '.','.','.','.','.','.','.','.',
        '.','.','.','.','.','.','.','.',
        '.','.','.','.','.','.','.','.',
        '.','.','.','.','.','.','.','.',
        'p','p','p','p','p','p','p','p',
        'r','n','b','q','k','b','n','r',
    ]);
    const expected = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';

    expect(received).toStrictEqual(expected);
});

test("convertPointsToNumbers()", () => {
    const received = convertPointsToNumbers('..../..p./ppp./.p../p...');
    const expected = '4/2p./ppp./.p2/p3';

    expect(received).toBe(expected);
});

test("getRanks()", () => {
    const received = getRanks("pppp/PPPP/....");
    const expected = ["pppp", "PPPP", "...."];

    expect(received).toStrictEqual(expected);
});

test("getRankCells()", () => {
    const received = getRankCells("p3");
    const expected = ["p", ".", ".", "."];

    expect(received).toStrictEqual(expected);
});

test("convertNumbersToPoints()", () => {
    const received = convertNumbersToPoints('3pp3');
    const expected = "...pp...";

    expect(received).toBe(expected);
});

test("parseMove() | common move", () => {
    const received = parseMove("a2a3");
    const expected = {
        move: [8, 16],
    };

    expect(received).toStrictEqual(expected);
});

test("parseMove() | promotion move", () => {
    const received = parseMove("h7h8Q");
    const expected = {
        move: [55, 63],
        promotionPiece: "Q",
    };

    expect(received).toStrictEqual(expected);
});

test("parseMove() | castling move", () => {
    const received = parseMove("e1g1");
    const expected = {
        move: [4, 6],
        castling: {
            rookMove: [7, 5],
            letter: "K",
        },
    };

    expect(received).toStrictEqual(expected);
});

test("parseMove() | pawn double move", () => {
    const received = parseMove("a2a4");
    const expected = {
        move: [8, 24],
        enPassantTarget: 'a3',
    };

    expect(received).toStrictEqual(expected);
});

test("mapPositionToBoardIndex() | a1", () => {
    const received = mapPositionToBoardIndex("a1");
    const expected = 0;

    expect(received).toBe(expected);
});

test("mapPositionToBoardIndex() | h8", () => {
    const received = mapPositionToBoardIndex("h8");
    const expected = 63;

    expect(received).toBe(expected);
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