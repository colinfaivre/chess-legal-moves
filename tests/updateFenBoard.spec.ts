import updateFenBoard from "../src/game/updateFenBoard/updateFenBoard";
import { parseBoard } from "../src/game/updateFenBoard/parseBoard";
import { getRanks } from "../src/game/updateFenBoard/parseBoard";
import { getRankCells } from "../src/game/updateFenBoard/parseBoard";
import { convertNumbersToPoints } from "../src/game/updateFenBoard/parseBoard";
import { composeBoardArrayToString } from "../src/game/updateFenBoard/composeBoardArrayToString";
import { convertPointsToNumbers } from "../src/game/updateFenBoard/composeBoardArrayToString";
import { parseMove } from "../src/game/updateFenBoard/parseMove";
import { mapPositionToBoardIndex } from "../src/game/updateFenBoard/parseMove";

test("updateFenBoard() | a2a4", () => {
    const updatedFenBoard = updateFenBoard('a2a4', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');
    expect(updatedFenBoard).toStrictEqual({
        fenBoard: 'rnbqkbnr/pppppppp/8/8/P7/8/.PPPPPPP/RNBQKBNR',
        enPassantTarget: "a3",
    })
});

test("updateFenBoard() | h2h4", () => {
    const updatedFenBoard = updateFenBoard('h2h4', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');
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