import { IRayAttack } from "../../../../types";
import BitBoard from "../../../BitBoard/BitBoard";

export function generateSouthAttacks(attacksList: IRayAttack[]): IRayAttack[] {
    /**************
     * 8 .......x *
     * 7 .......1 *
     * 6 .......1 *
     * 5 .......1 *
     * 4 .......1 *
     * 3 .......1 *
     * 2 .......1 *
     * 1 .......1 * -- H7_H1 
     *   ABCDEFGH
     *************/

    const H7_H1 = BitBoard.fromHex('0080808080808080');
    let southAttackMask: BitBoard = H7_H1;

    for (let sq = 63; sq >= 0; sq--) {
        attacksList[sq].so = southAttackMask;
        southAttackMask = southAttackMask.shiftRight(1);
    }

    return attacksList
}