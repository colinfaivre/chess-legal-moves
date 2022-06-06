import { removeHighestBit, slideUp } from '../../moveHelpers';
import { IRayAttack } from '../../../../types';
import BitBoard from '../../../BitBoard/BitBoard';
import { RAYS } from '../rays';

/**
 * Populates an array of 64 IRayAttacks objects with west attacks
 * @param attacksList an IRayAttack array of directional attacks
 * @returns attacksList populated with west attacks
 */
export function generateWestAttacks(attacksList: IRayAttack[]): IRayAttack[] {
  /**************
   * 8 ........ *
   * 7 ........ *
   * 6 ........ *
   * 5 ........ *
   * 4 ........ *
   * 3 ........ *
   * 2 ........ *
   * 1 1111111x * -- G1_A1
   *   ABCDEFGH
   *************/
  // G1_A1 west attack mask is used as a placeholder to be slid on each square
  let westAttackMask: BitBoard = RAYS.G1_A1;

  // Loop through each file of the board: H, G, ... B, A
  // at the end of each loop, slide the mask to the left for the next iteration
  for (let file = 7; file >= 0; file--) {
    // Set temporary west mask to be used by the following for loop
    let west = westAttackMask;
    // Loop through each square (from bottom to top) on the current file
    // at the end of each loop, slide the mask to the top for the next iteration
    for (let square = 0; square < 8 * 8; square += 8) {
      // populate each attacksList square west property
      attacksList[square + file].we = west;
      west = slideUp(west);
    }
    westAttackMask = removeHighestBit(westAttackMask);
  }

  return attacksList;
}
