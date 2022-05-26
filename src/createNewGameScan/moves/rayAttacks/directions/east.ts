import { IRayAttack } from "../../../../types";
import BitBoard from "../../../BitBoard/BitBoard";

export function generateEastAttacks(attacksList: IRayAttack[]): IRayAttack[] {
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
    
    const B1_H1 = BitBoard.fromHex('00000000000000FE');
    let eastAttackMask: BitBoard = B1_H1;

    for (let file = 0; file < 8; file++, eastAttackMask = getNextEastMask(eastAttackMask)) {
        let east = eastAttackMask;
        for (let r8 = 0; r8 < 8*8; r8 += 8) {
            attacksList[r8 + file].ea = east;
            east = east.shiftLeft(8);
        } 
    }

    return attacksList;
}

export function getNextEastMask(attacks: BitBoard): BitBoard {
    attacks.clearBit(attacks.bitScanForward());

    return attacks;
}