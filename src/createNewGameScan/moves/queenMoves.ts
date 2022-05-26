import { ILegalMoves } from "../../types"
import Board from "../Board/Board"
import { RAY_ATTACKS } from "./rayAttacks/rayAttacks"

export function queenMoves(baord: Board): ILegalMoves {
    return [
        {
            from: 'd1',
            quietMoves: [],
            killMoves: [],
        },
    ]
}