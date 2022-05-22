import BitBoard from "../../../../src/createNewGameScan/BitBoard/BitBoard";
import {
    rankMask,
    fileMask,
    diagonalMask,
    antiDiagonalMask,
} from "../../../../src/createNewGameScan/moves/slidingAttacks";

test("rankMask() | 30", () => {
    const received = rankMask(30);
    const expected = new BitBoard(4278190080, 0);

    expect(received).toStrictEqual(expected);
});
test("fileMask() | 30", () => {
    const received = fileMask(30);
    const expected = new BitBoard(1077952576, 1077952576);

    expect(received).toStrictEqual(expected);
});
test("diagonalMask() | 30", () => {
    const received = diagonalMask(30);
    const expected = new BitBoard(1075843080, 128);

    expect(received).toStrictEqual(expected);
});
test("antiDiagonalMask() | 30", () => {
    const received = antiDiagonalMask(30);
    const expected = new BitBoard(1082130432, 67637280);

    expect(received).toStrictEqual(expected);
});