import { ILegalMoves } from "../../types";
import BitBoard from "../BitBoard/BitBoard";
import Board from "../Board/Board";
import { positionsTable } from "./../BitBoard/positionsHashTable"
import { getNegativeRayAttacks, getPositiveRayAttacks } from "./rayAttacks/occupiedBoardRayAttacks";


export function rooksMoves(board: Board): ILegalMoves {
    // @TODO black rooks can't be used for the moment
    // @TODO document
    const rookScope = generateSlidingPieceScope(board, 'rook');
    const rooksMovesList = generatePieceMoves(rookScope, board);
    

    return rooksMovesList;
}

export function generateSlidingPieceScope(board: Board, pieceName: 'rook' | 'bishop' | 'queen') {
    const piecePositions = board.whiteRooks.extractBits();
    const rookScope = piecePositions.map((position) => {
        const northAttacks = getPositiveRayAttacks(board.allPieces, 'no', position);
        const eastAttacks = getPositiveRayAttacks(board.allPieces, 'ea', position);
        const westAttacks = getNegativeRayAttacks(board.allPieces, 'we', position);
        const southAttacks = getNegativeRayAttacks(board.allPieces, 'so', position);

        return {
            position,
            attacks: northAttacks.or(eastAttacks).or(westAttacks).or(southAttacks),
        }
    });

    return rookScope;
}

export function generatePieceMoves(
    rookScope: {position: number, attacks: BitBoard}[],
    board: Board,
) {
    const rooksList = rookScope.map((rookAttack) => {
        const from = positionsTable[rookAttack.position];
        const quietMoves = rookAttack.attacks
            .and(board.quietDestinations)
            .extractBits()
            .map(rookDestination => positionsTable[rookDestination]);
        const killMoves = rookAttack.attacks
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