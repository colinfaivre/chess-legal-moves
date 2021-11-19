import { IMovesFromPosition } from "../types"
import BitBoard from "../bitboard/bitboard"
import { positionsTable } from "../bitboard/positionsHashTable"

export function generateQueensMoves(queensBB: BitBoard): IMovesFromPosition[] {
    return [
        {
            from: 'd1',
            quietMoves: [],
            killMoves: [],
        },
    ]
}