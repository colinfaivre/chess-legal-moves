import { ILegalMoves } from "../../types"
import BitBoard from "../BitBoard/BitBoard"

export function bishopsMoves(bishopsBB: BitBoard): ILegalMoves {
    return [
        {
            from: 'c1',
            quietMoves: [],
            killMoves: [],
        },
        {
            from: 'f1',
            quietMoves: [],
            killMoves: [],
        },
    ]
}