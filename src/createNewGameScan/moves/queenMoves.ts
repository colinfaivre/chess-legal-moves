import { ILegalMoves } from "../../types"
import BitBoard from "../BitBoard/BitBoard"

export function queenMoves(queensBB: BitBoard): ILegalMoves {
    return [
        {
            from: 'd1',
            quietMoves: [],
            killMoves: [],
        },
    ]
}