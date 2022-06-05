import { RAYS } from '../rays';
import { generateNorthEastAttacks } from './northEast';
import { initRayAttackList } from '../emptyBoardRayAttacks';

test('generateNorthEastAttacks() | from a1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[0].noEa;
  const expected = RAYS.B2_H8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from b1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[1].noEa;
  const expected = RAYS.C2_H7;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from c1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[2].noEa;
  const expected = RAYS.D2_H6;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from d1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[3].noEa;
  const expected = RAYS.E2_H5;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from e1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[4].noEa;
  const expected = RAYS.F2_H4;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from f1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[5].noEa;
  const expected = RAYS.G2_H3;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from g1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[6].noEa;
  const expected = RAYS.H2;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from h1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[7].noEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from h2', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[15].noEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from h3', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[23].noEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from h4', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[31].noEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from h5', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[39].noEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from h6', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[47].noEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from h7', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[55].noEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from a2', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[8].noEa;
  const expected = RAYS.B3_G8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from a3', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[16].noEa;
  const expected = RAYS.B4_F8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from a4', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[24].noEa;
  const expected = RAYS.B5_E8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from a5', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[32].noEa;
  const expected = RAYS.B6_D8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from a6', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[40].noEa;
  const expected = RAYS.B7_C8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from a7', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[48].noEa;
  const expected = RAYS.B8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from a8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[56].noEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from b8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[57].noEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from c8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[58].noEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from d8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[59].noEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from e8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[60].noEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from f8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[61].noEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from g8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[62].noEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from h8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthEastAttacks(emptyRayAttackList)[63].noEa;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
