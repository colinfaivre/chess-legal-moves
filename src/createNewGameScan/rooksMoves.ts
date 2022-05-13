import { ILegalMoves } from "../types"
import BitBoard from "./bitboard/bitboard"

export function rooksMoves(rooksBB: BitBoard): ILegalMoves {
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