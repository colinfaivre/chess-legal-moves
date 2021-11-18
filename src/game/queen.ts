import { IMovesFromPosition } from "../types"
import BitBoard from "../bitboard/bitboard"
import { positionsTable } from "../bitboard/positionsHashTable"

export function generateQueensMoves(queensBB: BitBoard): IMovesFromPosition[] {
    return [
        {
            from: 'a4',
            quietMoves: [],
            killMoves: [],
        },
    ]
}