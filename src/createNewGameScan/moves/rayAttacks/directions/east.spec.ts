import { RAYS } from '../rays';
import { generateEastAttacks } from './east';
import { initRayAttackList } from '../emptyBoardRayAttacks';

test('generateEastAttacks() | from a1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[0].ea;
  const expected = RAYS.B1_H1;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from b1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[1].ea;
  const expected = RAYS.C1_H1;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from c1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[2].ea;
  const expected = RAYS.D1_H1;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from d1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[3].ea;
  const expected = RAYS.E1_H1;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from e1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[4].ea;
  const expected = RAYS.F1_H1;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from f1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[5].ea;
  const expected = RAYS.G1_H1;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from g1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[6].ea;
  const expected = RAYS.H1;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from a2', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[8].ea;
  const expected = RAYS.B2_H2;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from a3', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[16].ea;
  const expected = RAYS.B3_H3;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from a4', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[24].ea;
  const expected = RAYS.B4_H4;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from a5', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[32].ea;
  const expected = RAYS.B5_H5;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from a6', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[40].ea;
  const expected = RAYS.B6_H6;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from a7', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[48].ea;
  const expected = RAYS.B7_H7;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from a8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[56].ea;
  const expected = RAYS.B8_H8;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from b8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[57].ea;
  const expected = RAYS.C8_H8;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from c8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[58].ea;
  const expected = RAYS.D8_H8;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from d8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[59].ea;
  const expected = RAYS.E8_H8;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from e8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[60].ea;
  const expected = RAYS.F8_H8;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from f8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[61].ea;
  const expected = RAYS.G8_H8;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from g8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[62].ea;
  const expected = RAYS.H8;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from h1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[7].ea;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from h2', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[15].ea;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from h3', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[23].ea;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from h4', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[31].ea;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from h5', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[39].ea;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from h6', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[47].ea;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from h7', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[55].ea;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateEastAttacks() | from h8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateEastAttacks(emptyRayAttackList)[63].ea;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
