import { slideDown, slideUp, removeHighestBit } from '../../moveHelpers';
import { IRayAttack } from '../../../../types';
import BitBoard from '../../../BitBoard/BitBoard';
import { RAYS } from '../rays';

/**
 * Populates an array of 64 IRayAttacks objects with south-west attacks
 * @param attacksList an IRayAttack array of directional attacks
 * @returns attacksList populated with south-west attacks
 */
export function generateSouthWestAttacks(
  attacksList: IRayAttack[]
): IRayAttack[] {
  /**************
   * 8 .......x *
   * 7 ......1. *
   * 6 .....1.. *
   * 5 ....1... *
   * 4 ...1.... *
   * 3 ..1..... *
   * 2 .1...... *
   * 1 1....... * -- G7_A1
   *   ABCDEFGH
   *************/
  // G7_A1 south-west attack mask is used as a placeholder to be slid on each square
  let southWestAttackMask: BitBoard = RAYS.G7_A1;

  // Loop through each file of the board: A, B, ... G, H
  // at the end of each loop, slide the mask up and remove the highest bit for the next iteration
  for (let file = 0; file < 8; file++) {
    // Set temporary south-west mask to be used by the following for loop
    let southWest = southWestAttackMask;
    // Loop through each square (from top to bottom) on the current file
    // at the end of each loop, slide down the mask for the next iteration
    for (let square = 63; square >= 0; square -= 8) {
      // populate each attacksList square south-west property
      attacksList[square - file].soWe = southWest;
      southWest = slideDown(southWest);
    }
    southWestAttackMask = slideUp(southWestAttackMask);
    southWestAttackMask = removeHighestBit(southWestAttackMask);
  }

  return attacksList;
}
