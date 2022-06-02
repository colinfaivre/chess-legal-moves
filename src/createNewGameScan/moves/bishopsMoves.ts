import { ILegalMoves } from "../../types"
import Board from "../Board/Board"

export function bishopsMoves(board: Board): ILegalMoves {
    // @TODO sue EMPTY_BOARD_RAY_ATTACKS
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