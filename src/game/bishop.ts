import { IMovesFromPosition } from "../types"
import BitBoard from "../bitboard/bitboard"
import { positionsTable } from "../bitboard/positionsHashTable"

export function generateBishopsMoves(bishopsBB: BitBoard): IMovesFromPosition[] {
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