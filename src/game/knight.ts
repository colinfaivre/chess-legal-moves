import { IMovesFromPosition, IPosition } from "../types"
import Board from '../board'
import BitBoard from "../bitboard/bitboard"
import { positionsTable } from "../bitboard/positionsHashTable"

export function generateKnightsMoves(board: Board): IMovesFromPosition[] {
    const allKnightMovesTable = generateAllKnightMovesBBTable();

    const knightsList = board.whiteKnights.extractBits().map((knightPositionCode) => {
        return {
            from: positionsTable[knightPositionCode],
            quietMoves: allKnightMovesTable[knightPositionCode].and(board.quietDestinations).extractBits().map(knightDestination => positionsTable[knightDestination]),
            killMoves: allKnightMovesTable[knightPositionCode].and(board.blacks).extractBits().map(knightDestination => positionsTable[knightDestination]),
        }
    })

    return knightsList;
}

function generateAllKnightMovesBBTable(): BitBoard[] {
    // A list of 64 bitboards representing the knight possible moves from any board position
    const AFile = [0, 8, 16, 24, 32, 40, 48, 56];
    const BFile = [1, 9, 17, 25, 33, 41, 49, 57];
    const ABFile = [...AFile, ...BFile];
    const HFile = [7, 15, 23, 31, 39, 47, 55, 63];
    const GFile = [6, 14, 22, 30, 38, 46, 54, 62];
    const GHFile = [...GFile, ...HFile];

    function noNoEa(position: number): number {
        return !AFile.includes(position + 17) ? position + 17 : null;
    }
    function noEaEa(position: number): number {
        return !ABFile.includes(position + 10) ? position + 10 : null;
    }
    function soEaEa(position: number): number {
        return !ABFile.includes(position - 6) ? position - 6 : null;
    }
    function soSoEa(position: number): number {
        return !AFile.includes(position - 15) ? position - 15 : null;
    }
    function noNoWe(position: number): number {
        return !HFile.includes(position + 15) ? position + 15 : null;
    }
    function noWeWe(position: number): number {
        return !GHFile.includes(position + 6) ? position + 6 : null;
    }
    function soWeWe(position: number): number {
        return !GHFile.includes(position - 10) ? position - 10 : null;
    }
    function soSoWe(position: number): number {
        return !HFile.includes(position - 17) ? position - 17 : null;
    }
    
    const allKnightMoves: BitBoard[] = [];
    
    for (let position = 0; position < 63; position++) {
        const movesFromThisPosition = [];
        if (noNoEa(position)) movesFromThisPosition.push(noNoEa(position));
        if (noEaEa(position)) movesFromThisPosition.push(noEaEa(position));
        if (soEaEa(position)) movesFromThisPosition.push(soEaEa(position));
        if (soSoEa(position)) movesFromThisPosition.push(soSoEa(position));
        if (noNoWe(position)) movesFromThisPosition.push(noNoWe(position));
        if (noWeWe(position)) movesFromThisPosition.push(noWeWe(position));
        if (soWeWe(position)) movesFromThisPosition.push(soWeWe(position));
        if (soSoWe(position)) movesFromThisPosition.push(soSoWe(position));

        allKnightMoves.push(BitBoard.fromPositions(movesFromThisPosition));
    }

    return allKnightMoves;
}
