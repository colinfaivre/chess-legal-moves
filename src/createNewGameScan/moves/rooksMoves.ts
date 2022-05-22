import { ILegalMoves } from "../../types";
import Board from "../Board/Board";
import { positionsTable } from "./../BitBoard/positionsHashTable"
import { rankMask, fileMask } from "./slidingAttacks";

export function rooksMoves(board: Board): ILegalMoves {
    const rooksList = board.whiteRooks.extractBits().map((rookPositionCode) => {
        const from = positionsTable[rookPositionCode];
        const rookMoves = rankMask(rookPositionCode).xor(fileMask(rookPositionCode));
        const quietMoves = rookMoves
            .and(board.quietDestinations)
            .extractBits()
            .map(rookDestination => positionsTable[rookDestination]);
        const killMoves = rookMoves
            .and(board.blacks)
            .extractBits()
            .map(rookDestination => positionsTable[rookDestination]);
        return {
            from,
            quietMoves,
            killMoves,
        }
    })

    return rooksList;
}