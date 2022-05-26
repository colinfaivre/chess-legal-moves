import { IRayAttack } from "../../../../types";
import BitBoard from "../../../BitBoard/BitBoard";

export function generateSouthEastAttacks(attacksList: IRayAttack[]): IRayAttack[] {
    /**************
     * 8 x....... *
     * 7 .1...... *
     * 6 ..1..... *
     * 5 ...1.... *
     * 4 ....1... *
     * 3 .....1.. *
     * 2 ......1. *
     * 1 .......1 * -- B7_H1 
     *   ABCDEFGH
     *************/

    const B7_H1 = BitBoard.fromHex('0002040810204080');
    
    return attacksList;
}