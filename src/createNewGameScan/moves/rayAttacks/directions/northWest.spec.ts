import { RAYS } from '../rays';
import { generateNorthWestAttacks } from './northWest';
import { initRayAttackList } from '../emptyBoardRayAttacks';

test('generateNorthEastAttacks() | from h1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[7].noWe;
  const expected = RAYS.G2_A8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from g1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[6].noWe;
  const expected = RAYS.F2_A7;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from f1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[5].noWe;
  const expected = RAYS.E2_A6;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from e1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[4].noWe;
  const expected = RAYS.D2_A5;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from d1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[3].noWe;
  const expected = RAYS.C2_A4;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from c1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[2].noWe;
  const expected = RAYS.B2_A3;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from b1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[1].noWe;
  const expected = RAYS.A2;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from a1', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[0].noWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from a2', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[8].noWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from a3', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[16].noWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from a4', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[24].noWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from a5', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[32].noWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from a6', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[40].noWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from a7', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[48].noWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from a8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[56].noWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from b8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[57].noWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from c8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[58].noWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from d8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[59].noWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from e8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[60].noWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from f8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[61].noWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from g8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[62].noWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from h2', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[15].noWe;
  const expected = RAYS.G3_B8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from h3', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[23].noWe;
  const expected = RAYS.G4_C8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from h4', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[31].noWe;
  const expected = RAYS.G5_D8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from h5', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[39].noWe;
  const expected = RAYS.G6_E8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from h6', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[47].noWe;
  const expected = RAYS.G7_F8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from h7', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[55].noWe;
  const expected = RAYS.G8;

  expect(received).toStrictEqual(expected);
});

test('generateNorthEastAttacks() | from h8', () => {
  const emptyRayAttackList = initRayAttackList();
  const received = generateNorthWestAttacks(emptyRayAttackList)[63].noWe;
  const expected = RAYS.NULL;

  expect(received).toStrictEqual(expected);
});
