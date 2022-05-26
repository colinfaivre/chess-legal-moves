import { IRayAttack } from "../../../../types";
import BitBoard from "../../../BitBoard/BitBoard";

export function generateNorthAttacks(attacksList: IRayAttack[]): IRayAttack[] {
    // @TODO document
    // @TODO add tests
    
    /**************
     * 8 1....... *
     * 7 1....... *
     * 6 1....... *
     * 5 1....... *
     * 4 1....... *
     * 3 1....... *
     * 2 1....... *
     * 1 x....... * -- A2_A8 
     *   ABCDEFGH
     *************/

    const A2_A8 = BitBoard.fromHex('0101010101010100');
    let northAttackMask: BitBoard = A2_A8;

    for (let sq = 0; sq < 64; sq++) {
        attacksList[sq].no = northAttackMask;
        northAttackMask = northAttackMask.shiftLeft(1);
    }
    
    return attacksList;
}