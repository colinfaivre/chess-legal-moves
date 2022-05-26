import { IRayAttack } from "../../../../types";
import BitBoard from "../../../BitBoard/BitBoard";

export function generateNorthWestAttacks(attacksList: IRayAttack[]): IRayAttack[] {
    // @TODO document
    // @TODO add tests
    
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
    
    // @TODO nearly there...
    const G2_A8 = BitBoard.fromHex('0102040810204000');
    let northWestAttackMask: BitBoard = G2_A8;

    for (let file = 7; file >= 0; file--, northWestAttackMask = getNextNorthWestMask(northWestAttackMask)) {
        let northWest = northWestAttackMask;
        for (let rank = 0; rank < 8; rank++) {
            attacksList[file + 8*rank].noWe = northWest;
            northWest = northWest.shiftLeft(8);
        } 
    }

    return attacksList;
}

export function getNextNorthWestMask(attacks: BitBoard): BitBoard {
    attacks = attacks.shiftRight(8);
    attacks.clearBit(attacks.bitScanReverse());

    return attacks;
}