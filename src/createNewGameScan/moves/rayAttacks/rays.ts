import BitBoard from '../../BitBoard/BitBoard';

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

function generateFilePositions(fileIndex: number): number[] {
  const file: number[] = [];

  for (let rankIndex = 0; rankIndex < 8; rankIndex++) {
    file.push(rankIndex * 8 + fileIndex);
  }

  return file;
}

function generateRankPositions(rankIndex: number): number[] {
  const rank: number[] = [];

  for (let fileIndex = 0; fileIndex < 8; fileIndex++) {
    rank.push(rankIndex + fileIndex);
  }

  return rank;
}

export const RAYS = {
  NULL: new BitBoard(0, 0),

  // @TODO use those FILES to generate other rays
  A_FILE: BitBoard.fromPositions(generateFilePositions(0)),
  B_FILE: BitBoard.fromPositions(generateFilePositions(1)),
  C_FILE: BitBoard.fromPositions(generateFilePositions(2)),
  D_FILE: BitBoard.fromPositions(generateFilePositions(3)),
  E_FILE: BitBoard.fromPositions(generateFilePositions(4)),
  F_FILE: BitBoard.fromPositions(generateFilePositions(5)),
  G_FILE: BitBoard.fromPositions(generateFilePositions(6)),
  H_FILE: BitBoard.fromPositions(generateFilePositions(7)),
  // @TODO use those RANKS to generate other rays
  ONE_RANK: BitBoard.fromPositions(generateRankPositions(0)),
  TWO_RANK: BitBoard.fromPositions(generateRankPositions(1)),
  THREE_RANK: BitBoard.fromPositions(generateRankPositions(2)),
  FOUR_RANK: BitBoard.fromPositions(generateRankPositions(3)),
  FIVE_RANK: BitBoard.fromPositions(generateRankPositions(4)),
  SIX_RANK: BitBoard.fromPositions(generateRankPositions(5)),
  SEVEN_RANK: BitBoard.fromPositions(generateRankPositions(6)),
  EIGHT_RANK: BitBoard.fromPositions(generateRankPositions(7)),

  // North
  A2_A8: BitBoard.fromPositions([8, 16, 24, 32, 40, 48, 56]),
  A3_A8: BitBoard.fromPositions([16, 24, 32, 40, 48, 56]),
  A4_A8: BitBoard.fromPositions([24, 32, 40, 48, 56]),
  A5_A8: BitBoard.fromPositions([32, 40, 48, 56]),
  A6_A8: BitBoard.fromPositions([40, 48, 56]),
  A7_A8: BitBoard.fromPositions([48, 56]),
  A8: BitBoard.fromPos(56),

  B2_B8: BitBoard.fromPositions([
    8 + 1,
    16 + 1,
    24 + 1,
    32 + 1,
    40 + 1,
    48 + 1,
    56 + 1,
  ]),
  C2_C8: BitBoard.fromPositions([
    8 + 2,
    16 + 2,
    24 + 2,
    32 + 2,
    40 + 2,
    48 + 2,
    56 + 2,
  ]),
  D2_D8: BitBoard.fromPositions([
    8 + 3,
    16 + 3,
    24 + 3,
    32 + 3,
    40 + 3,
    48 + 3,
    56 + 3,
  ]),
  E2_E8: BitBoard.fromPositions([
    8 + 4,
    16 + 4,
    24 + 4,
    32 + 4,
    40 + 4,
    48 + 4,
    56 + 4,
  ]),
  F2_F8: BitBoard.fromPositions([
    8 + 5,
    16 + 5,
    24 + 5,
    32 + 5,
    40 + 5,
    48 + 5,
    56 + 5,
  ]),
  G2_G8: BitBoard.fromPositions([
    8 + 6,
    16 + 6,
    24 + 6,
    32 + 6,
    40 + 6,
    48 + 6,
    56 + 6,
  ]),

  H2_H8: BitBoard.fromPositions([
    8 + 7,
    16 + 7,
    24 + 7,
    32 + 7,
    40 + 7,
    48 + 7,
    56 + 7,
  ]),
  H3_H8: BitBoard.fromPositions([
    16 + 7,
    24 + 7,
    32 + 7,
    40 + 7,
    48 + 7,
    56 + 7,
  ]),
  H4_H8: BitBoard.fromPositions([24 + 7, 32 + 7, 40 + 7, 48 + 7, 56 + 7]),
  H5_H8: BitBoard.fromPositions([32 + 7, 40 + 7, 48 + 7, 56 + 7]),
  H6_H8: BitBoard.fromPositions([40 + 7, 48 + 7, 56 + 7]),
  H7_H8: BitBoard.fromPositions([48 + 7, 56 + 7]),
  H8: BitBoard.fromPos(63),

  // South
  H7_H1: BitBoard.fromPositions([55, 47, 39, 31, 23, 15, 7]),
  H6_H1: BitBoard.fromPositions([47, 39, 31, 23, 15, 7]),
  H5_H1: BitBoard.fromPositions([39, 31, 23, 15, 7]),
  H4_H1: BitBoard.fromPositions([31, 23, 15, 7]),
  H3_H1: BitBoard.fromPositions([23, 15, 7]),
  H2_H1: BitBoard.fromPositions([15, 7]),
  H1: BitBoard.fromPos(7),

  G7_G1: BitBoard.fromPositions([
    55 - 1,
    47 - 1,
    39 - 1,
    31 - 1,
    23 - 1,
    15 - 1,
    7 - 1,
  ]),
  F7_F1: BitBoard.fromPositions([
    55 - 2,
    47 - 2,
    39 - 2,
    31 - 2,
    23 - 2,
    15 - 2,
    7 - 2,
  ]),
  E7_E1: BitBoard.fromPositions([
    55 - 3,
    47 - 3,
    39 - 3,
    31 - 3,
    23 - 3,
    15 - 3,
    7 - 3,
  ]),
  D7_D1: BitBoard.fromPositions([
    55 - 4,
    47 - 4,
    39 - 4,
    31 - 4,
    23 - 4,
    15 - 4,
    7 - 4,
  ]),
  C7_C1: BitBoard.fromPositions([
    55 - 5,
    47 - 5,
    39 - 5,
    31 - 5,
    23 - 5,
    15 - 5,
    7 - 5,
  ]),
  B7_B1: BitBoard.fromPositions([
    55 - 6,
    47 - 6,
    39 - 6,
    31 - 6,
    23 - 6,
    15 - 6,
    7 - 6,
  ]),

  A7_A1: BitBoard.fromPositions([
    55 - 7,
    47 - 7,
    39 - 7,
    31 - 7,
    23 - 7,
    15 - 7,
    7 - 7,
  ]),
  A6_A1: BitBoard.fromPositions([40, 32, 24, 16, 8, 0]),
  A5_A1: BitBoard.fromPositions([32, 24, 16, 8, 0]),
  A4_A1: BitBoard.fromPositions([24, 16, 8, 0]),
  A3_A1: BitBoard.fromPositions([16, 8, 0]),
  A2_A1: BitBoard.fromPositions([8, 0]),
  A1: BitBoard.fromPos(0),

  // East
  B1_H1: BitBoard.fromPositions([1, 2, 3, 4, 5, 6, 7]),
  C1_H1: BitBoard.fromPositions([2, 3, 4, 5, 6, 7]),
  D1_H1: BitBoard.fromPositions([3, 4, 5, 6, 7]),
  E1_H1: BitBoard.fromPositions([4, 5, 6, 7]),
  F1_H1: BitBoard.fromPositions([5, 6, 7]),
  G1_H1: BitBoard.fromPositions([6, 7]),

  B2_H2: BitBoard.fromPositions([9, 10, 11, 12, 13, 14, 15]),
  B3_H3: BitBoard.fromPositions([
    1 + 8 * 2,
    2 + 8 * 2,
    3 + 8 * 2,
    4 + 8 * 2,
    5 + 8 * 2,
    6 + 8 * 2,
    7 + 8 * 2,
  ]),
  B4_H4: BitBoard.fromPositions([
    1 + 8 * 3,
    2 + 8 * 3,
    3 + 8 * 3,
    4 + 8 * 3,
    5 + 8 * 3,
    6 + 8 * 3,
    7 + 8 * 3,
  ]),
  B5_H5: BitBoard.fromPositions([
    1 + 8 * 4,
    2 + 8 * 4,
    3 + 8 * 4,
    4 + 8 * 4,
    5 + 8 * 4,
    6 + 8 * 4,
    7 + 8 * 4,
  ]),
  B6_H6: BitBoard.fromPositions([
    1 + 8 * 5,
    2 + 8 * 5,
    3 + 8 * 5,
    4 + 8 * 5,
    5 + 8 * 5,
    6 + 8 * 5,
    7 + 8 * 5,
  ]),
  B7_H7: BitBoard.fromPositions([
    1 + 8 * 6,
    2 + 8 * 6,
    3 + 8 * 6,
    4 + 8 * 6,
    5 + 8 * 6,
    6 + 8 * 6,
    7 + 8 * 6,
  ]),

  B8_H8: BitBoard.fromPositions([
    1 + 8 * 7,
    2 + 8 * 7,
    3 + 8 * 7,
    4 + 8 * 7,
    5 + 8 * 7,
    6 + 8 * 7,
    7 + 8 * 7,
  ]),
  C8_H8: BitBoard.fromPositions([
    2 + 8 * 7,
    3 + 8 * 7,
    4 + 8 * 7,
    5 + 8 * 7,
    6 + 8 * 7,
    7 + 8 * 7,
  ]),
  D8_H8: BitBoard.fromPositions([
    3 + 8 * 7,
    4 + 8 * 7,
    5 + 8 * 7,
    6 + 8 * 7,
    7 + 8 * 7,
  ]),
  E8_H8: BitBoard.fromPositions([4 + 8 * 7, 5 + 8 * 7, 6 + 8 * 7, 7 + 8 * 7]),
  F8_H8: BitBoard.fromPositions([5 + 8 * 7, 6 + 8 * 7, 7 + 8 * 7]),
  G8_H8: BitBoard.fromPositions([6 + 8 * 7, 7 + 8 * 7]),

  // South
  G1_A1: BitBoard.fromPositions([0, 1, 2, 3, 4, 5, 6]),
  F1_A1: BitBoard.fromPositions([0, 1, 2, 3, 4, 5]),
  E1_A1: BitBoard.fromPositions([0, 1, 2, 3, 4]),
  D1_A1: BitBoard.fromPositions([0, 1, 2, 3]),
  C1_A1: BitBoard.fromPositions([0, 1, 2]),
  B1_A1: BitBoard.fromPositions([0, 1]),

  G2_A2: BitBoard.fromPositions([
    0 + 8 * 1,
    1 + 8 * 1,
    2 + 8 * 1,
    3 + 8 * 1,
    4 + 8 * 1,
    5 + 8 * 1,
    6 + 8 * 1,
  ]),
  G3_A3: BitBoard.fromPositions([
    0 + 8 * 2,
    1 + 8 * 2,
    2 + 8 * 2,
    3 + 8 * 2,
    4 + 8 * 2,
    5 + 8 * 2,
    6 + 8 * 2,
  ]),
  G4_A4: BitBoard.fromPositions([
    0 + 8 * 3,
    1 + 8 * 3,
    2 + 8 * 3,
    3 + 8 * 3,
    4 + 8 * 3,
    5 + 8 * 3,
    6 + 8 * 3,
  ]),
  G5_A5: BitBoard.fromPositions([
    0 + 8 * 4,
    1 + 8 * 4,
    2 + 8 * 4,
    3 + 8 * 4,
    4 + 8 * 4,
    5 + 8 * 4,
    6 + 8 * 4,
  ]),
  G6_A6: BitBoard.fromPositions([
    0 + 8 * 5,
    1 + 8 * 5,
    2 + 8 * 5,
    3 + 8 * 5,
    4 + 8 * 5,
    5 + 8 * 5,
    6 + 8 * 5,
  ]),
  G7_A7: BitBoard.fromPositions([
    0 + 8 * 6,
    1 + 8 * 6,
    2 + 8 * 6,
    3 + 8 * 6,
    4 + 8 * 6,
    5 + 8 * 6,
    6 + 8 * 6,
  ]),

  G8_A8: BitBoard.fromPositions([
    0 + 8 * 7,
    1 + 8 * 7,
    2 + 8 * 7,
    3 + 8 * 7,
    4 + 8 * 7,
    5 + 8 * 7,
    6 + 8 * 7,
  ]),
  F8_A8: BitBoard.fromPositions([
    0 + 8 * 7,
    1 + 8 * 7,
    2 + 8 * 7,
    3 + 8 * 7,
    4 + 8 * 7,
    5 + 8 * 7,
  ]),
  E8_A8: BitBoard.fromPositions([
    0 + 8 * 7,
    1 + 8 * 7,
    2 + 8 * 7,
    3 + 8 * 7,
    4 + 8 * 7,
  ]),
  D8_A8: BitBoard.fromPositions([0 + 8 * 7, 1 + 8 * 7, 2 + 8 * 7, 3 + 8 * 7]),
  C8_A8: BitBoard.fromPositions([0 + 8 * 7, 1 + 8 * 7, 2 + 8 * 7]),
  B8_A8: BitBoard.fromPositions([0 + 8 * 7, 1 + 8 * 7]),

  // North-East
  B2_H8: BitBoard.fromPositions([9, 18, 27, 36, 45, 54, 63]),
  C2_H7: BitBoard.fromPositions([
    18 - 1 * 8,
    27 - 1 * 8,
    36 - 1 * 8,
    45 - 1 * 8,
    54 - 1 * 8,
    63 - 1 * 8,
  ]),
  D2_H6: BitBoard.fromPositions([
    27 - 2 * 8,
    36 - 2 * 8,
    45 - 2 * 8,
    54 - 2 * 8,
    63 - 2 * 8,
  ]),
  E2_H5: BitBoard.fromPositions([
    36 - 3 * 8,
    45 - 3 * 8,
    54 - 3 * 8,
    63 - 3 * 8,
  ]),
  F2_H4: BitBoard.fromPositions([45 - 4 * 8, 54 - 4 * 8, 63 - 4 * 8]),
  G2_H3: BitBoard.fromPositions([54 - 5 * 8, 63 - 5 * 8]),
  H2: BitBoard.fromPositions([63 - 6 * 8]),

  B3_G8: BitBoard.fromPositions([
    9 + 8 * 1,
    18 + 8 * 1,
    27 + 8 * 1,
    36 + 8 * 1,
    45 + 8 * 1,
    54 + 8 * 1,
  ]),
  B4_F8: BitBoard.fromPositions([
    9 + 8 * 2,
    18 + 8 * 2,
    27 + 8 * 2,
    36 + 8 * 2,
    45 + 8 * 2,
  ]),
  B5_E8: BitBoard.fromPositions([
    9 + 8 * 3,
    18 + 8 * 3,
    27 + 8 * 3,
    36 + 8 * 3,
  ]),
  B6_D8: BitBoard.fromPositions([9 + 8 * 4, 18 + 8 * 4, 27 + 8 * 4]),
  B7_C8: BitBoard.fromPositions([9 + 8 * 5, 18 + 8 * 5]),
  B8: BitBoard.fromPositions([9 + 8 * 6]),

  // North-West
  G2_A8: BitBoard.fromPositions([14, 21, 28, 35, 42, 49, 56]),
  F2_A7: BitBoard.fromPositions([
    14 - 1,
    21 - 1,
    28 - 1,
    35 - 1,
    42 - 1,
    49 - 1,
  ]),
  E2_A6: BitBoard.fromPositions([14 - 2, 21 - 2, 28 - 2, 35 - 2, 42 - 2]),
  D2_A5: BitBoard.fromPositions([14 - 3, 21 - 3, 28 - 3, 35 - 3]),
  C2_A4: BitBoard.fromPositions([14 - 4, 21 - 4, 28 - 4]),
  B2_A3: BitBoard.fromPositions([14 - 5, 21 - 5]),
  A2: BitBoard.fromPositions([14 - 6]),

  G3_B8: BitBoard.fromPositions([
    14 + 8 * 1,
    21 + 8 * 1,
    28 + 8 * 1,
    35 + 8 * 1,
    42 + 8 * 1,
    49 + 8 * 1,
  ]),
  G4_C8: BitBoard.fromPositions([
    14 + 8 * 2,
    21 + 8 * 2,
    28 + 8 * 2,
    35 + 8 * 2,
    42 + 8 * 2,
  ]),
  G5_D8: BitBoard.fromPositions([
    14 + 8 * 3,
    21 + 8 * 3,
    28 + 8 * 3,
    35 + 8 * 3,
  ]),
  G6_E8: BitBoard.fromPositions([14 + 8 * 4, 21 + 8 * 4, 28 + 8 * 4]),
  G7_F8: BitBoard.fromPositions([14 + 8 * 5, 21 + 8 * 5]),
  G8: BitBoard.fromPositions([14 + 8 * 6]),

  // South-East
  B7_H1: BitBoard.fromPositions([49, 42, 35, 28, 21, 14, 7]),
  C7_H2: BitBoard.fromPositions([
    49 + 1,
    42 + 1,
    35 + 1,
    28 + 1,
    21 + 1,
    14 + 1,
  ]),
  D7_H3: BitBoard.fromPositions([49 + 2, 42 + 2, 35 + 2, 28 + 2, 21 + 2]),
  E7_H4: BitBoard.fromPositions([49 + 3, 42 + 3, 35 + 3, 28 + 3]),
  F7_H5: BitBoard.fromPositions([49 + 4, 42 + 4, 35 + 4]),
  G7_H6: BitBoard.fromPositions([49 + 5, 42 + 5]),
  H7: BitBoard.fromPositions([49 + 6]),

  B6_G1: BitBoard.fromPositions([
    49 - 8 * 1,
    42 - 8 * 1,
    35 - 8 * 1,
    28 - 8 * 1,
    21 - 8 * 1,
    14 - 8 * 1,
  ]),
  B5_F1: BitBoard.fromPositions([
    49 - 8 * 2,
    42 - 8 * 2,
    35 - 8 * 2,
    28 - 8 * 2,
    21 - 8 * 2,
  ]),
  B4_E1: BitBoard.fromPositions([
    49 - 8 * 3,
    42 - 8 * 3,
    35 - 8 * 3,
    28 - 8 * 3,
  ]),
  B3_D1: BitBoard.fromPositions([49 - 8 * 4, 42 - 8 * 4, 35 - 8 * 4]),
  B2_C1: BitBoard.fromPositions([49 - 8 * 5, 42 - 8 * 5]),
  B1: BitBoard.fromPositions([49 - 8 * 6]),

  // South-West
  G7_A1: BitBoard.fromPositions([54, 45, 36, 27, 18, 9, 0]),
  F7_A2: BitBoard.fromPositions([
    54 - 1,
    45 - 1,
    36 - 1,
    27 - 1,
    18 - 1,
    9 - 1,
  ]),
  E7_A3: BitBoard.fromPositions([54 - 2, 45 - 2, 36 - 2, 27 - 2, 18 - 2]),
  D7_A4: BitBoard.fromPositions([54 - 3, 45 - 3, 36 - 3, 27 - 3]),
  C7_A5: BitBoard.fromPositions([54 - 4, 45 - 4, 36 - 4]),
  B7_A6: BitBoard.fromPositions([54 - 5, 45 - 5]),
  A7: BitBoard.fromPositions([54 - 6]),

  G6_B1: BitBoard.fromPositions([
    54 - 8 * 1,
    45 - 8 * 1,
    36 - 8 * 1,
    27 - 8 * 1,
    18 - 8 * 1,
    9 - 8 * 1,
  ]),
  G5_C1: BitBoard.fromPositions([
    54 - 8 * 2,
    45 - 8 * 2,
    36 - 8 * 2,
    27 - 8 * 2,
    18 - 8 * 2,
  ]),
  G4_D1: BitBoard.fromPositions([
    54 - 8 * 3,
    45 - 8 * 3,
    36 - 8 * 3,
    27 - 8 * 3,
  ]),
  G3_E1: BitBoard.fromPositions([54 - 8 * 4, 45 - 8 * 4, 36 - 8 * 4]),
  G2_F1: BitBoard.fromPositions([54 - 8 * 5, 45 - 8 * 5]),
  G1: BitBoard.fromPositions([54 - 8 * 6]),
};
