import { IMovesFromPosition } from "../types"
import BitBoard from "../bitboard/bitboard"
import { positionsTable } from "../bitboard/positionsHashTable"

export function generateKingMoves(kingBB: BitBoard): IMovesFromPosition[] {
    return [
        {
            from: 'a5',
            quietMoves: [],
            killMoves: [],
        },
    ]
}