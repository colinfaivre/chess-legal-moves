import { IRayAttack } from "../../../../types";
import BitBoard from "../../../BitBoard/BitBoard";

export function generateWestAttacks(attacksList: IRayAttack[]): IRayAttack[] {
    // @TODO document
    // @TODO add tests
    
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
    
    const G1_A1 = BitBoard.fromHex('000000000000007F');
    let westAttackMask: BitBoard = G1_A1;

    for (let file = 7; file >= 0; file--, westAttackMask = getNextWestMask(westAttackMask)) {
        let west = westAttackMask;
        for (let r8 = 0; r8 < 8*8; r8 += 8) {
            attacksList[r8 + file].we = west;
            west = west.shiftLeft(8);
        } 
    }

    return attacksList;
}

export function getNextWestMask(attacks: BitBoard): BitBoard {
    attacks.clearBit(attacks.bitScanReverse());

    return attacks;
}