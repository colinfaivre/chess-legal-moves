import { IRayAttack } from "../../../../types";
import BitBoard from "../../../BitBoard/BitBoard";

/**
 * Populates an array of 64 IRayAttacks objects with north attacks
 * @param attacksList an IRayAttack array of directional attacks
 * @returns attacksList populated with north attacks
 */
export function generateNorthAttacks(attacksList: IRayAttack[]): IRayAttack[] {
    /**************
     * 8 1....... *
     * 7 1....... *
     * 6 1....... *
     * 5 1....... *
     * 4 1....... *
     * 3 1....... *
     * 2 1....... *
     * 1 x....... *
     *   ABCDEFGH
     *************/
    // A2_A8 north attack mask is used as a placeholder to be slid on each square
    const A2_A8 = BitBoard.fromHex('0101010101010100');
    let northAttackMask: BitBoard = A2_A8;

    // Loop through each square of the board a1, a2, ... h7, h8
    // populate each attacksList square north property
    // slide the mask to the right of the next iteration
    for (let square = 0; square < 64; square++) {
        attacksList[square].no = northAttackMask;
        northAttackMask = northAttackMask.shiftLeft(1);
    }
    
    return attacksList;
}