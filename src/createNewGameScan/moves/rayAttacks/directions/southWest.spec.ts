import { RAYS } from '../rays';
import { generateSouthWestAttacks } from './southWest';
import { initRayAttackList } from '../emptyBoardRayAttacks';

test('generateSouthWestAttacks() | from h8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[63].soWe;
  const expected = RAYS.G7_A1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from g8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[62].soWe;
  const expected = RAYS.F7_A2;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from f8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[61].soWe;
  const expected = RAYS.E7_A3;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from e8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[60].soWe;
  const expected = RAYS.D7_A4;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from d8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[59].soWe;
  const expected = RAYS.C7_A5;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from c8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[58].soWe;
  const expected = RAYS.B7_A6;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from b8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[57].soWe;
  const expected = RAYS.A7;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from a8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[56].soWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from a7', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[48].soWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from a6', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[40].soWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from a5', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[32].soWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from a4', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[24].soWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from a3', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[16].soWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from a2', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[8].soWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from a1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[0].soWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from b1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[1].soWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from c1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[2].soWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from d1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[3].soWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from e1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[4].soWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from f1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[5].soWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from g1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[6].soWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from h7', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[55].soWe;
  const expected = RAYS.G6_B1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from h6', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[47].soWe;
  const expected = RAYS.G5_C1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from h5', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[39].soWe;
  const expected = RAYS.G4_D1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from h4', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[31].soWe;
  const expected = RAYS.G3_E1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from h3', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[23].soWe;
  const expected = RAYS.G2_F1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from h2', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[15].soWe;
  const expected = RAYS.G1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthWestAttacks() | from h1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthWestAttacks(emptyRayAttackList)[7].soWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
