import { IColor, IPieceScope } from "../../types";
import Board from "../Board/Board";
import { positionsTable } from "./../BitBoard/positionsHashTable"

export function generatePieceMoves(
    pieceScope: IPieceScope[],
    board: Board,
    hasToPlay: IColor,
) {
    const opponent = hasToPlay === 'w' ? 'blacks' : 'whites';

    const pieceMoves = pieceScope.map((pieceScope) => {
        const from = positionsTable[pieceScope.position];
        const quietMoves = pieceScope.attacks
            .and(board.quietDestinations)
            .extractBits()
            .map(rookDestination => positionsTable[rookDestination]);
        const killMoves = pieceScope.attacks
            .and(board[opponent])
            .extractBits()
            .map(rookDestination => positionsTable[rookDestination]);
            
        return {
            from,
            quietMoves,
            killMoves,
        }
    })

    return pieceMoves;
}