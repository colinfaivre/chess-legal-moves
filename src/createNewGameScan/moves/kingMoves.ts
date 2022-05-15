import { ILegalMoves } from "../../types"
import BitBoard from "../BitBoard/BitBoard"

export function kingMoves(kingBB: BitBoard): ILegalMoves {
    return [
        {
            from: 'e1',
            quietMoves: [],
            killMoves: [],
        },
    ]
}