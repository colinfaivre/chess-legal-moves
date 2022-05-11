import updateFenBoard from "../src/game/updateFenBoard";
import {
    parseBoard,
    composeBoardArrayToString,
    convertPointsToNumbers,
} from "../src/game/updateFenBoard";

test("updateFenBoard() | a2a4", () => {
    const updatedFenBoard = updateFenBoard('a2a4', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');
    expect(updatedFenBoard).toStrictEqual({
        fenBoard: 'rnbqkbnr/pppppppp/8/8/P7/8/.PPPPPPP/RNBQKBNR' 
    })
});

test("updateFenBoard() | h2h4", () => {
    const updatedFenBoard = updateFenBoard('h2h4', 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');
    expect(updatedFenBoard).toStrictEqual({
        fenBoard: 'rnbqkbnr/pppppppp/8/8/7P/8/PPPPPPP./RNBQKBNR'
    })
});

test("parseBoard()", () => {
    const result = parseBoard('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR');
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

    expect(result).toStrictEqual(expected);
});

test("composeBoardArrayToString()", () => {
    const result = composeBoardArrayToString([
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

    expect(result).toStrictEqual(expected);
});

test("convertPointsToNumbers()", () => {
    const result = convertPointsToNumbers('..../..p./ppp./.p../p...');
    const expected = '4/2p./ppp./.p2/p3';

    expect(result).toBe(expected);
});