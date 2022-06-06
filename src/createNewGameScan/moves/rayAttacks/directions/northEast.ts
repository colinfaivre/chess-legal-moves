import { slideUp, slideDown, removeLowestBit } from '../../moveHelpers';
import { IRayAttack } from '../../../../types';
import BitBoard from '../../../BitBoard/BitBoard';
import { RAYS } from '../rays';

/**
 * Populates an array of 64 IRayAttacks objects with north-east attacks
 * @param attacksList an IRayAttack array of directional attacks
 * @returns attacksList populated with north-east attacks
 */
export function generateNorthEastAttacks(
  attacksList: IRayAttack[]
): IRayAttack[] {
  /**************
   * 8 .......1 *
   * 7 ......1. *
   * 6 .....1.. *
   * 5 ....1... *
   * 4 ...1.... *
   * 3 ..1..... *
   * 2 .1...... *
   * 1 x....... * -- B2_H8
   *   ABCDEFGH
   *************/
  // B2_H8 north-east attack mask is used as a placeholder to be slid on each square
  let northEastAttackMask: BitBoard = RAYS.B2_H8;

  // Loop through each file of the board: A, B, ... G, H
  // at the end of each loop, slide the mask down and remove the smallest bit for the next iteration
  for (let file = 0; file < 8; file++) {
    // Set temporary north-east mask to be used by the following for loop
    let northEast = northEastAttackMask;
    // Loop through each square (from bottom to top) on the current file
    // at the end of each loop, slide the mask to the top for the next iteration
    for (let square = 0; square < 8 * 8; square += 8) {
      // populate each attacksList square north-east property
      attacksList[square + file].noEa = northEast;
      northEast = slideUp(northEast);
    }
    northEastAttackMask = slideDown(northEastAttackMask);
    northEastAttackMask = removeLowestBit(northEastAttackMask);
  }

  return attacksList;
}
