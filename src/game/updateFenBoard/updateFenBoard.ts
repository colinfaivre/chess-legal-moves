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

    let castlingLetter: string;
    let enPassantTarget: string;

    const parsedMove = parseMove(move);
    const [fromIndex, toIndex] = parsedMove.move;
    const pieceToMove = parsedMove.promotionPiece ? parsedMove.promotionPiece : boardArray[fromIndex];
    boardArray[fromIndex] = ".";
    boardArray[toIndex] = pieceToMove;

    if (parsedMove.castling) {
        const [rookFromIndex, rookToindex] = parsedMove.castling.rookMove;
        boardArray[rookFromIndex] = ".";
        boardArray[rookToindex] = pieceToMove;
        castlingLetter = parsedMove.castling.letter;
    }

    const result: IUpdateFenBoardResult = {
        fenBoard : composeBoardArrayToString(boardArray),
    }

    if (castlingLetter) result.castlingLetter = castlingLetter; 
    if (enPassantTarget) result.enPassantTarget = enPassantTarget;

    return result;
}
