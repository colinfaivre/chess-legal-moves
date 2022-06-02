import { ILegalMoves } from "../../types"
import Board from "../Board/Board"

export function queenMoves(baord: Board): ILegalMoves {
    // @TODO sue EMPTY_BOARD_RAY_ATTACKS
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