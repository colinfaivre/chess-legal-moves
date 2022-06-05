import { IRayAttack } from '../../../types';
import {
  generateNorthAttacks,
  generateSouthAttacks,
  generateEastAttacks,
  generateNorthEastAttacks,
  generateWestAttacks,
  generateSouthWestAttacks,
  generateNorthWestAttacks,
  generateSouthEastAttacks,
} from './directions';

export function generateRayAttacks(rayAttacks: IRayAttack[]): IRayAttack[] {
  // @TODO document
  // @TODO add tests
  rayAttacks = generateNorthAttacks(rayAttacks);
  rayAttacks = generateSouthAttacks(rayAttacks);
  rayAttacks = generateEastAttacks(rayAttacks);
  rayAttacks = generateNorthEastAttacks(rayAttacks);
  rayAttacks = generateWestAttacks(rayAttacks);
  rayAttacks = generateSouthWestAttacks(rayAttacks);
  rayAttacks = generateNorthWestAttacks(rayAttacks);
  rayAttacks = generateSouthEastAttacks(rayAttacks);

  return rayAttacks;
}

export function initRayAttackList() {
  const result: IRayAttack[] = [];

  for (let i = 0; i < 64; i++) {
    result.push({
      no: null,
      ea: null,
      noEa: null,
      noWe: null,
      so: null,
      we: null,
      soWe: null,
      soEa: null,
    });
  }

  return result;
}

export const EMPTY_BOARD_RAY_ATTACKS = generateRayAttacks(initRayAttackList());
