import { ILegalMoves } from "../types"
import BitBoard from "../bitboard/bitboard"

export function pawnsMoves(pawnsBB: BitBoard): ILegalMoves {
    return [
        {
            from: 'a2',
            quietMoves: ['a3', 'a4'],
            killMoves: [],
        },
        {
            from: 'b2',
            quietMoves: ['b3', 'b4'],
            killMoves: [],
        },
        {
            from: 'c2',
            quietMoves: ['c3', 'c4'],
            killMoves: [],
        },
        {
            from: 'd2',
            quietMoves: ['d3', 'd4'],
            killMoves: [],
        },
        {
            from: 'e2',
            quietMoves: ['e3', 'e4'],
            killMoves: [],
        },
        {
            from: 'f2',
            quietMoves: ['f3', 'f4'],
            killMoves: [],
        },
        {
            from: 'g2',
            quietMoves: ['g3', 'g4'],
            killMoves: [],
        },
        {
            from: 'h2',
            quietMoves: ['h3', 'h4'],
            killMoves: [],
        },
    ]
}