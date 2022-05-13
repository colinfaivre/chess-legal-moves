import Board from '../board';
import { IScan } from '../types';
import { knightsMoves } from './knightsMoves';
import { pawnsMoves } from './pawnsMoves';
import { rooksMoves } from './rooksMoves';
import { bishopsMoves } from './bishopsMoves';
import { queenMoves } from './queenMoves';
import { kingMoves } from './kingMoves';

export const generate = {
    knightsMoves,
    pawnsMoves,
    rooksMoves,
    bishopsMoves,
    queenMoves,
    kingMoves,
}

export function createNewGameScan(fenBoard: string): IScan {
    const scan: IScan = {
        legalMoves: [],
        kingState: {
            isChecked: false,
            isCheckMated: false,
            isDraw: false,
        },
    }
    const board = new Board(fenBoard);

    if (board.whiteKnights) scan.legalMoves.push(...generate.knightsMoves(board));
    if (board.whitePawns) scan.legalMoves.push(...generate.pawnsMoves(board.whitePawns));
    if (board.whiteRooks) scan.legalMoves.push(...generate.rooksMoves(board.whiteRooks));
    if (board.whiteBishops) scan.legalMoves.push(...generate.bishopsMoves(board.whiteBishops));
    if (board.whiteQueens) scan.legalMoves.push(...generate.queenMoves(board.whiteQueens));
    if (board.whiteKing) scan.legalMoves.push(...generate.kingMoves(board.whiteKing));

    return scan;
}