import { ILegalMoves } from "../types"
import BitBoard from "../bitboard/bitboard"

export function generateQueensMoves(queensBB: BitBoard): ILegalMoves {
    return [
        {
            from: 'd1',
            quietMoves: [],
            killMoves: [],
        },
    ]
}