import { IRayAttack } from "../../../../types";
import BitBoard from "../../../BitBoard/BitBoard";

export function generateNorthEastAttacks(attacksList: IRayAttack[]): IRayAttack[] {
    /**************
     * 8 .......1 *
     * 7 ......1. *
     * 6 .....1.. *
     * 5 ....1... *
     * 4 ...1.... *
     * 3 ..1..... *
     * 2 .1...... *
     * 1 x....... * -- B1_H8 
     *   ABCDEFGH
     *************/

    const B2_H8 = BitBoard.fromHex('8040201008040200');
    let northEastAttackMask: BitBoard = B2_H8;

    for (let file = 0; file < 8; file++, northEastAttackMask = getNextNorthEastMask(northEastAttackMask)) {
        let northEast = northEastAttackMask;
        for (let r8 = 0; r8 < 8*8; r8 += 8) {
            attacksList[r8 + file].noEa = northEast;
            northEast = northEast.shiftLeft(8);
        } 
    }

    return attacksList
}

export function getNextNorthEastMask(attacks: BitBoard): BitBoard {
    attacks = attacks.shiftRight(8);
    attacks.clearBit(attacks.bitScanForward());

    return attacks;
}