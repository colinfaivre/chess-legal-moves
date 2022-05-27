import BitBoard from "../../BitBoard/BitBoard";

    /*********************************
     *                               *
     *   8 56 57 58 59 60 61 62 63   *
     *   7 48 49 50 51 52 53 54 55   *
     *   6 40 41 42 43 44 45 46 47   *
     *   5 32 33 34 35 36 37 38 39   *
     *   4 24 25 26 27 28 29 30 31   *
     *   3 16 17 18 19 20 21 22 23   *
     *   2 08 09 10 11 12 13 14 15   *
     *   1 00 01 02 03 04 05 06 07   *
     *     A  B  C  D  E  F  G  H    *
     *                               *
     ********************************/

export const RAYS = {
    NULL: new BitBoard(0, 0),
    // North
    A2_A8: BitBoard.fromPositions([8, 16, 24, 32, 40, 48, 56]),
    A3_A8: BitBoard.fromPositions([16, 24, 32, 40, 48, 56]),
    A4_A8: BitBoard.fromPositions([24, 32, 40, 48, 56]),
    A5_A8: BitBoard.fromPositions([32, 40, 48, 56]),
    A6_A8: BitBoard.fromPositions([40, 48, 56]),
    A7_A8: BitBoard.fromPositions([48, 56]),
    A8: BitBoard.fromPos(56),

    B2_B8: BitBoard.fromPositions([8+1, 16+1, 24+1, 32+1, 40+1, 48+1, 56+1]),
    C2_C8: BitBoard.fromPositions([8+2, 16+2, 24+2, 32+2, 40+2, 48+2, 56+2]),
    D2_D8: BitBoard.fromPositions([8+3, 16+3, 24+3, 32+3, 40+3, 48+3, 56+3]),
    E2_E8: BitBoard.fromPositions([8+4, 16+4, 24+4, 32+4, 40+4, 48+4, 56+4]),
    F2_F8: BitBoard.fromPositions([8+5, 16+5, 24+5, 32+5, 40+5, 48+5, 56+5]),
    G2_G8: BitBoard.fromPositions([8+6, 16+6, 24+6, 32+6, 40+6, 48+6, 56+6]),

    H2_H8: BitBoard.fromPositions([8+7, 16+7, 24+7, 32+7, 40+7, 48+7, 56+7]),
    H3_H8: BitBoard.fromPositions([16+7, 24+7, 32+7, 40+7, 48+7, 56+7]),
    H4_H8: BitBoard.fromPositions([24+7, 32+7, 40+7, 48+7, 56+7]),
    H5_H8: BitBoard.fromPositions([32+7, 40+7, 48+7, 56+7]),
    H6_H8: BitBoard.fromPositions([40+7, 48+7, 56+7]),
    H7_H8: BitBoard.fromPositions([48+7, 56+7]),
    H8: BitBoard.fromPos(63),
}