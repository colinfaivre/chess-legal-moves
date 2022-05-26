import { ILegalMoves } from "../../types"
import Board from "../Board/Board"
import { RAY_ATTACKS } from "./rayAttacks/rayAttacks"

export function bishopsMoves(board: Board): ILegalMoves {
    // @TODO sue RAY_ATTACKS
    // @TODO document
    // @TODO add tests
    
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