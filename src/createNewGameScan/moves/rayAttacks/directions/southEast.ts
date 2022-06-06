import { slideDown, slideUp, removeHighestBit } from '../../moveHelpers';
import { IRayAttack } from '../../../../types';
import BitBoard from '../../../BitBoard/BitBoard';
import { RAYS } from '../rays';

/**
 * Populates an array of 64 IRayAttacks objects with south-east attacks
 * @param attacksList an IRayAttack array of directional attacks
 * @returns attacksList populated with south-east attacks
 */
export function generateSouthEastAttacks(
  attacksList: IRayAttack[]
): IRayAttack[] {
  /**************
   * 8 x....... *
   * 7 .1...... *
   * 6 ..1..... *
   * 5 ...1.... *
   * 4 ....1... *
   * 3 .....1.. *
   * 2 ......1. *
   * 1 .......1 * -- B7_H1
   *   ABCDEFGH *
   *************/
  // B7_H1 south-east attack mask is used as a placeholder to be slid on each square
  let southEastAttackMask: BitBoard = RAYS.B7_H1;

  // Loop through each file of the board: H, G, ... B, A
  // at the end of each loop, slide the mask up and remove the highest bit for the next iteration
  for (let file = 7; file >= 0; file--) {
    // Set temporary south-east mask to be used by the following for loop
    let southEast = southEastAttackMask;
    // Loop through each square (from top to bottom) on the current file
    // at the end of each loop, slide down the mask for the next iteration
    for (let square = 63; square >= 0; square -= 8) {
      // populate each attacksList square south-east property
      attacksList[square - file].soEa = southEast;
      southEast = slideDown(southEast);
    }
    southEastAttackMask = slideUp(southEastAttackMask);
    southEastAttackMask = removeHighestBit(southEastAttackMask);
  }

  return attacksList;
}
