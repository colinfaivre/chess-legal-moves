import { parseBoard } from "./parseBoard";
import { parseMove } from "./parseMove";
import { composeBoardArrayToString } from "./composeBoardArrayToString";
import {
    IUpdateFenBoardResult,
} from '../../types';

export default function updateFenBoard(
    move: string,
    fenBoard: string
): IUpdateFenBoardResult {
    const boardArray = parseBoard(fenBoard);

    let isHalfMoveClockMove: boolean;
    let castlingLetter: string;

    const parsedMove = parseMove(move);
    const [fromIndex, toIndex] = parsedMove.move;
    const pieceToMove = parsedMove.promotionPiece ? parsedMove.promotionPiece : boardArray[fromIndex];

    if (!isPawn(pieceToMove) && !isCapture(pieceToMove, boardArray[toIndex])) {
        isHalfMoveClockMove = true;
    }

    boardArray[fromIndex] = ".";
    boardArray[toIndex] = pieceToMove;

    if (parsedMove.castling) {
        const [rookFromIndex, rookToindex] = parsedMove.castling.rookMove;
        boardArray[rookFromIndex] = ".";
        boardArray[rookToindex] = pieceToMove;
        castlingLetter = parsedMove.castling.letter;
    }

    const result: IUpdateFenBoardResult = {
        fenBoard: composeBoardArrayToString(boardArray),
    }

    if (isHalfMoveClockMove) result.incrementHalfMoveClock = true;
    if (castlingLetter) result.castlingLetter = castlingLetter; 
    if (parsedMove.enPassantTarget) result.enPassantTarget = parsedMove.enPassantTarget;

    return result;
}

function isPawn(piece: string): boolean {
    return ['p', 'P'].includes(piece);
}

function isCapture(piece: string, destination: string): boolean {
    const isMoveColorWhite = piece === piece.toUpperCase();
    const isDestinationColorWhite = destination === destination.toUpperCase();

    return isMoveColorWhite !== isDestinationColorWhite;
}
