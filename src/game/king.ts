import { ILegalMoves } from "../types"
import BitBoard from "../bitboard/bitboard"

export function generateKingMoves(kingBB: BitBoard): ILegalMoves {
    return [
        {
            from: 'e1',
            quietMoves: [],
            killMoves: [],
        },
    ]
}