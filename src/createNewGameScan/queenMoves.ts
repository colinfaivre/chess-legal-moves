import { ILegalMoves } from "../types"
import BitBoard from "../bitboard/bitboard"

export function queenMoves(queensBB: BitBoard): ILegalMoves {
    return [
        {
            from: 'd1',
            quietMoves: [],
            killMoves: [],
        },
    ]
}