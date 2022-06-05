import { RAYS } from '../rays';
import { generateWestAttacks } from './west';
import { initRayAttackList } from '../emptyBoardRayAttacks';

test('generateSouthAttacks() | from h1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[7].we;
  const expected = RAYS.G1_A1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from g1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[6].we;
  const expected = RAYS.F1_A1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from f1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[5].we;
  const expected = RAYS.E1_A1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from e1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[4].we;
  const expected = RAYS.D1_A1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from d1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[3].we;
  const expected = RAYS.C1_A1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from c1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[2].we;
  const expected = RAYS.B1_A1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from b1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[1].we;
  const expected = RAYS.A1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from a1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[0].we;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from h2', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[15].we;
  const expected = RAYS.G2_A2;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from h3', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[23].we;
  const expected = RAYS.G3_A3;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from h4', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[31].we;
  const expected = RAYS.G4_A4;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from h5', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[39].we;
  const expected = RAYS.G5_A5;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from h6', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[47].we;
  const expected = RAYS.G6_A6;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from h7', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[55].we;
  const expected = RAYS.G7_A7;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from h8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[63].we;
  const expected = RAYS.G8_A8;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from g8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[62].we;
  const expected = RAYS.F8_A8;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from f8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[61].we;
  const expected = RAYS.E8_A8;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from e8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[60].we;
  const expected = RAYS.D8_A8;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from d8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[59].we;
  const expected = RAYS.C8_A8;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from c8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[58].we;
  const expected = RAYS.B8_A8;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from b8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[57].we;
  const expected = RAYS.A8;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from a8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[56].we;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
test('generateSouthAttacks() | from a7', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[48].we;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
test('generateSouthAttacks() | from a6', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[40].we;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
test('generateSouthAttacks() | from a5', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[32].we;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
test('generateSouthAttacks() | from a4', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[24].we;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
test('generateSouthAttacks() | from a3', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[16].we;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
test('generateSouthAttacks() | from a2', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateWestAttacks(emptyRayAttackList)[8].we;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
