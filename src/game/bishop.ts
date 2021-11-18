import { IMovesFromPosition } from "../types"
import BitBoard from "../bitboard/bitboard"
import { positionsTable } from "../bitboard/positionsHashTable"

export function generateBishopsMoves(bishopsBB: BitBoard): IMovesFromPosition[] {
    return [
        {
            from: 'a3',
            quietMoves: [],
            killMoves: [],
        },
        {
            from: 'a6',
            quietMoves: [],
            killMoves: [],
        },
    ]
}