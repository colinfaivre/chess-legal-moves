import { RAYS } from '../rays';
import { generateSouthEastAttacks } from './southEast';
import { initRayAttackList } from '../emptyBoardRayAttacks';

test('generateSouthEastAttacks() | from a8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[56].soEa;
  const expected = RAYS.B7_H1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from b8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[57].soEa;
  const expected = RAYS.C7_H2;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from c8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[58].soEa;
  const expected = RAYS.D7_H3;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from d8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[59].soEa;
  const expected = RAYS.E7_H4;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from e8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[60].soEa;
  const expected = RAYS.F7_H5;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from f8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[61].soEa;
  const expected = RAYS.G7_H6;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from g8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[62].soEa;
  const expected = RAYS.H7;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from h8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[63].soEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from h7', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[55].soEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from h6', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[47].soEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from h5', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[39].soEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from h4', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[31].soEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from h3', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[23].soEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from h2', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[15].soEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from h1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[7].soEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from a7', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[48].soEa;
  const expected = RAYS.B6_G1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from a6', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[40].soEa;
  const expected = RAYS.B5_F1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from a5', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[32].soEa;
  const expected = RAYS.B4_E1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from a4', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[24].soEa;
  const expected = RAYS.B3_D1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from a3', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[16].soEa;
  const expected = RAYS.B2_C1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from a2', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[8].soEa;
  const expected = RAYS.B1;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from a1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[0].soEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from b1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[1].soEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from c1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[2].soEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from d1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[3].soEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from e1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[4].soEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from f1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[5].soEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateSouthEastAttacks() | from g1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateSouthEastAttacks(emptyRayAttackList)[6].soEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
