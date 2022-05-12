import { ILegalMoves } from "../types"
import BitBoard from "../bitboard/bitboard"

export function generateBishopsMoves(bishopsBB: BitBoard): ILegalMoves {
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