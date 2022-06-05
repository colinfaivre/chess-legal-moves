import { RAYS } from '../rays';
import { generateSouthAttacks } from './south';
import { initRayAttackList } from '../emptyBoardRayAttacks';

test('generateSouthAttacks() | from h8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[63].so;
  const expected = RAYS.H7_H1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from h7', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[55].so;
  const expected = RAYS.H6_H1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from h6', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[47].so;
  const expected = RAYS.H5_H1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from h5', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[39].so;
  const expected = RAYS.H4_H1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from h4', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[31].so;
  const expected = RAYS.H3_H1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from h3', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[23].so;
  const expected = RAYS.H2_H1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from h2', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[15].so;
  const expected = RAYS.H1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from g8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[62].so;
  const expected = RAYS.G7_G1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from f8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[61].so;
  const expected = RAYS.F7_F1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from e8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[60].so;
  const expected = RAYS.E7_E1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from d8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[59].so;
  const expected = RAYS.D7_D1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from c8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[58].so;
  const expected = RAYS.C7_C1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from b8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[57].so;
  const expected = RAYS.B7_B1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from a8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[56].so;
  const expected = RAYS.A7_A1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from a7', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[48].so;
  const expected = RAYS.A6_A1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from a6', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[40].so;
  const expected = RAYS.A5_A1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from a5', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[32].so;
  const expected = RAYS.A4_A1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from a4', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[24].so;
  const expected = RAYS.A3_A1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from a3', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[16].so;
  const expected = RAYS.A2_A1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from a2', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[8].so;
  const expected = RAYS.A1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthAttacks() | from a1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[0].so;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
test('generateSouthAttacks() | from b1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[1].so;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
test('generateSouthAttacks() | from c1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[2].so;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
test('generateSouthAttacks() | from d1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[3].so;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
test('generateSouthAttacks() | from e1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[4].so;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
test('generateSouthAttacks() | from f1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[5].so;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
test('generateSouthAttacks() | from g1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[6].so;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
test('generateSouthAttacks() | from h1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthAttacks(emptyRayAttackList)[7].so;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
