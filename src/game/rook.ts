import { IMovesFromPosition } from "../types"
import BitBoard from "../bitboard/bitboard"
import { positionsTable } from "../bitboard/positionsHashTable"

export function generateRooksMoves(rooksBB: BitBoard): IMovesFromPosition[] {
    return [
        {
            from: 'a1',
            quietMoves: [],
            killMoves: [],
        },
        {
            from: 'h1',
            quietMoves: [],
            killMoves: [],
        },
    ]
}