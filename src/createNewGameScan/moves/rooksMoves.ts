import { ILegalMoves } from "../../types";
import Board from "../Board/Board";
import { positionsTable } from "./../BitBoard/positionsHashTable"
import { RAY_ATTACKS } from "./rayAttacks/rayAttacks";

export function rooksMoves(board: Board): ILegalMoves {
    // @TODO sue RAY_ATTACKS
    // @TODO document
    // @TODO add tests

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