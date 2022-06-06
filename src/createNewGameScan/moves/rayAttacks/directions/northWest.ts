import { slideDown, slideUp, removeLowestBit } from '../../moveHelpers';
import { IRayAttack } from '../../../../types';
import BitBoard from '../../../BitBoard/BitBoard';
import { RAYS } from '../rays';

/**
 * Populates an array of 64 IRayAttacks objects with north-west attacks
 * @param attacksList an IRayAttack array of directional attacks
 * @returns attacksList populated with north-west attacks
 */
export function generateNorthWestAttacks(
  attacksList: IRayAttack[]
): IRayAttack[] {
  /**************
   * 8 1....... *
   * 7 .1...... *
   * 6 ..1..... *
   * 5 ...1.... *
   * 4 ....1... *
   * 3 .....1.. *
   * 2 ......1. *
   * 1 .......x * -- G2_A8
   *   ABCDEFGH
   *************/
  // G2_A8 north-west attack mask is used as a placeholder to be slid on each square
  let northWestAttackMask: BitBoard = RAYS.G2_A8;

  // Loop through each file of the board: H, G, ... B, A
  // at the end of each loop, slide the mask down and remove the lowest bit for the next iteration
  for (let file = 7; file >= 0; file--) {
    // Set temporary north-west mask to be used by the following for loop
    let northWest = northWestAttackMask;
    // Loop through each square (from bottom to top) on the current file
    // at the end of each loop, slide up the mask for the next iteration
    for (let square = 0; square < 8 * 8; square += 8) {
      // populate each attacksList square north-west property
      attacksList[square + file].noWe = northWest;
      northWest = slideUp(northWest);
    }
    northWestAttackMask = slideDown(northWestAttackMask);
    northWestAttackMask = removeLowestBit(northWestAttackMask);
  }

  return attacksList;
}
