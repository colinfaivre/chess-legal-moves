import { IRayAttack } from "../../../../types";
import BitBoard from "../../../BitBoard/BitBoard";
import { RAYS } from "../rays";

/**
 * Populates an array of 64 IRayAttacks objects with east attacks
 * @param attacksList an IRayAttack array of directional attacks
 * @returns attacksList populated with east attacks
 */
export function generateEastAttacks(attacksList: IRayAttack[]): IRayAttack[] {
    // @TODO add tests

    /**************
     * 8 ........ *
     * 7 ........ *
     * 6 ........ *
     * 5 ........ *
     * 4 ........ *
     * 3 ........ *
     * 2 ........ *
     * 1 x1111111 * -- B1_H1 
     *   ABCDEFGH
     *************/
    // B1_H1 east attack mask is used as a placeholder to be slid on each square
    let eastAttackMask: BitBoard = RAYS.B1_H1;

    // Loop through each file of the board A, B, ... G, H
    // at the end of the each loop slide the mask to the right for the next iteration
    for (let file = 0; file < 8; file++) {
        // Set temporary east mask to be used by the following for loops
        let east = eastAttackMask;
        // Loop through each square (from bottom to top) on the current file
        // at the end of each loop slide the mask to the tom for the next iteration
        for (let square = 0; square < 8 * 8; square += 8) {
            // populate each attacksList square east property
            attacksList[square + file].ea = east;
            east = slideTop(east);
        } 
        eastAttackMask = slideRight(eastAttackMask);
    }

    return attacksList;
}

export function slideRight(attacks: BitBoard): BitBoard {
    attacks = attacks.clearBit(attacks.bitScanForward());

    return attacks;
}

export function slideTop(attacks: BitBoard): BitBoard {
    attacks = attacks.shiftLeft(8);

    return attacks;
}