import { ILegalMoves } from "../../types"
import Board from "../Board/Board"
import { RAY_ATTACKS } from "./rayAttacks/rayAttacks"

export function queenMoves(baord: Board): ILegalMoves {
    // @TODO sue RAY_ATTACKS
    // @TODO document
    // @TODO add tests
    
    return [
        {
            from: 'd1',
            quietMoves: [],
            killMoves: [],
        },
    ]
}