import BitBoard from "../../../../../src/createNewGameScan/BitBoard/BitBoard";
import Board from "../../../../../src/createNewGameScan/Board/Board";
import {
    getPositiveRayAttacks,
} from "../../../../../src/createNewGameScan/moves/rayAttacks/occupiedBoardRayAttacks";

test("getPositiveRayAttacks() | starting position - north - a1 rook", () => {
    const startingBitBoard: BitBoard = new Board('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR').allPieces
    const received = getPositiveRayAttacks(startingBitBoard, 'no', 0);
    const expected = BitBoard.fromPos(8);

    expect(received).toStrictEqual(expected);
});

test("getPositiveRayAttacks() | starting position - east - a1 rook", () => {
    const startingBitBoard: BitBoard = new Board('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR').allPieces
    const received = getPositiveRayAttacks(startingBitBoard, 'ea', 0);
    const expected = BitBoard.fromPos(1);

    expect(received).toStrictEqual(expected);
});

test("getPositiveRayAttacks() | starting position with no pawn on a2 - north - a1 rook", () => {
    const startingBitBoard: BitBoard = new Board('rnbqkbnr/pppppppp/8/8/8/8/.PPPPPPP/RNBQKBNR').allPieces
    const received = getPositiveRayAttacks(startingBitBoard, 'no', 0);
    const expected = BitBoard.fromPositions([8, 16, 24, 32, 40, 48]);

    expect(received).toStrictEqual(expected);
});

test("getPositiveRayAttacks() | starting position with no pawn on a2 and a7 - north - a1 rook", () => {
    const startingBitBoard: BitBoard = new Board('rnbqkbnr/.ppppppp/8/8/8/8/.PPPPPPP/RNBQKBNR').allPieces
    const received = getPositiveRayAttacks(startingBitBoard, 'no', 0);
    const expected = BitBoard.fromPositions([8, 16, 24, 32, 40, 48, 56]);

    expect(received).toStrictEqual(expected);
});

test("getPositiveRayAttacks() | starting position - north - d1 queen", () => {
    const startingBitBoard: BitBoard = new Board('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR').allPieces
    const received = getPositiveRayAttacks(startingBitBoard, 'no', 3);
    const expected = BitBoard.fromPositions([11]);

    expect(received).toStrictEqual(expected);
});

test("getPositiveRayAttacks() | starting position - north-east - d1 queen", () => {
    const startingBitBoard: BitBoard = new Board('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR').allPieces
    const received = getPositiveRayAttacks(startingBitBoard, 'noEa', 3);
    const expected = BitBoard.fromPositions([12]);

    expect(received).toStrictEqual(expected);
});