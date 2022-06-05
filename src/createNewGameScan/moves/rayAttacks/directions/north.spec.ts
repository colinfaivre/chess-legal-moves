import { RAYS } from '../rays';
import { generateNorthAttacks } from './north';
import { initRayAttackList } from '../emptyBoardRayAttacks';

test('generateNorthAttacks() | from a1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[0].no;
  const expected = RAYS.A2_A8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from a2', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[8].no;
  const expected = RAYS.A3_A8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from a3', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[16].no;
  const expected = RAYS.A4_A8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from a4', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[24].no;
  const expected = RAYS.A5_A8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from a5', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[32].no;
  const expected = RAYS.A6_A8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from a6', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[40].no;
  const expected = RAYS.A7_A8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from a7', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[48].no;
  const expected = RAYS.A8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from b1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[1].no;
  const expected = RAYS.B2_B8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from c1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[2].no;
  const expected = RAYS.C2_C8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from d1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[3].no;
  const expected = RAYS.D2_D8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from e1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[4].no;
  const expected = RAYS.E2_E8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from f1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[5].no;
  const expected = RAYS.F2_F8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from g1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[6].no;
  const expected = RAYS.G2_G8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from h1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[7].no;
  const expected = RAYS.H2_H8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from h2', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[15].no;
  const expected = RAYS.H3_H8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from h3', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[23].no;
  const expected = RAYS.H4_H8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from h4', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[31].no;
  const expected = RAYS.H5_H8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from h5', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[39].no;
  const expected = RAYS.H6_H8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from h6', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[47].no;
  const expected = RAYS.H7_H8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from h7', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[55].no;
  const expected = RAYS.H8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from a8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[56].no;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from b8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[57].no;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from c8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[58].no;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from d8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[59].no;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from e8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[60].no;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from f8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[61].no;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from g8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[62].no;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthAttacks() | from h8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthAttacks(emptyRayAttackList)[63].no;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
