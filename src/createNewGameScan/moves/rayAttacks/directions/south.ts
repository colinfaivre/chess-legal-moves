import { IRayAttack } from '../../../../types';
import BitBoard from '../../../BitBoard/BitBoard';
import { RAYS } from '../rays';

/**
 * Populates an array of 64 IRayAttacks objects with south attacks
 * @param attacksList an IRayAttack array of directional attacks
 * @returns attacksList populated with south attacks
 */
export function generateSouthAttacks(attacksList: IRayAttack[]): IRayAttack[] {
  /**************
   * 8 .......x *
   * 7 .......1 *
   * 6 .......1 *
   * 5 .......1 *
   * 4 .......1 *
   * 3 .......1 *
   * 2 .......1 *
   * 1 .......1 *
   *   ABCDEFGH
   *************/
  // H7_H1 south attack mask is used as a placeholder to be slid on each square
  let southAttackMask: BitBoard = RAYS.H7_H1;

  // Loop through each square of the board h8, h7, ... a2, a1
  // populate each attacksList square south property
  // slide the mask to the left for the next iteration
  for (let square = 63; square >= 0; square--) {
    attacksList[square].so = southAttackMask;
    southAttackMask = southAttackMask.shiftRight(1);
  }

  return attacksList;
}
