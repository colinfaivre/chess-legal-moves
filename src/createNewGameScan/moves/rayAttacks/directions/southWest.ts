import { IRayAttack } from "../../../../types";
import BitBoard from "../../../BitBoard/BitBoard";

export function generateSouthWestAttacks(attacksList: IRayAttack[]): IRayAttack[] {
    // @TODO document
    // @TODO add tests
    
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

    // @TODO try again it does not work on 7
    const G7_A1 = BitBoard.fromHex('0040201008040201');

    let southWestAttackMask: BitBoard = G7_A1;
    for (let file = 0; file < 8; file++, southWestAttackMask = getNextSouthWestMask(southWestAttackMask)) {
        let southWest = southWestAttackMask;
        for (let r8 = 63; r8 >= 8; r8 -= 8) {
            attacksList[r8 - file].soWe = southWest;
            southWest = southWest.shiftRight(8);
        } 
    }

    return attacksList;
}

export function getNextSouthWestMask(attacks: BitBoard): BitBoard {
    attacks = attacks.shiftLeft(8);
    attacks.clearBit(attacks.bitScanReverse());

    return attacks;
}