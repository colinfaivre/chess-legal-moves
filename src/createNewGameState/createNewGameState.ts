import { parseBoard } from "./parseBoard";
import { parseMove } from "./parseMove";
import { composeBoardArrayToString } from "./composeBoardArrayToString";
import {
    IGameState,
} from '../types';

// @TODO document createNewGameState function
export default function createNewGameState(
    move: string,
    state: IGameState,
): IGameState {
    const boardArray = parseBoard(state.fenBoard);

    let isHalfMoveClockMove: boolean;
    let castlingLetter: string;

    const parsedMove = parseMove(move);
    const [fromIndex, toIndex] = parsedMove.move;
    const pieceToMove = boardArray[fromIndex];

    if (!isPawn(pieceToMove) && !isCapture(pieceToMove, boardArray[toIndex])) {
        isHalfMoveClockMove = true;
    }

    boardArray[fromIndex] = ".";
    boardArray[toIndex] = parsedMove.promotionPiece ? parsedMove.promotionPiece : pieceToMove;

    if (parsedMove.castling) {
        const [rookFromIndex, rookToindex] = parsedMove.castling.rookMove;
        boardArray[rookFromIndex] = ".";
        boardArray[rookToindex] = state.hasToPlay === 'w' ? 'R' : 'r';
        castlingLetter = parsedMove.castling.letter;
    }

    // Updates the state before returning it
    state.fenBoard = updateFenBoard(composeBoardArrayToString(boardArray))
    if (state.hasToPlay === "b") state.fullMoveClock = incrementFullMoveClock(state.fullMoveClock);
    if (isHalfMoveClockMove) state.halfMoveClock = incrementHalfMoveClock(state.halfMoveClock);
    if (castlingLetter) state.availableCastlings = updateAvailableCastlings(state.availableCastlings, castlingLetter); 
    if (parsedMove.enPassantTarget) state.enPassantTarget = parsedMove.enPassantTarget;
    state.hasToPlay = toggleHasToPlay(state.hasToPlay);

    return state;
}

export function isPawn(piece: string): boolean {
    return ['p', 'P'].includes(piece);
}

export function isCapture(piece: string, destination: string): boolean {
    if (destination === '.') return false;
    const isMoveColorWhite = piece === piece.toUpperCase();
    const isDestinationColorWhite = destination === destination.toUpperCase();

    return isMoveColorWhite !== isDestinationColorWhite;
}

export function updateFenBoard(fenBoard: string): string {
    return fenBoard;
}

export function incrementFullMoveClock(fullMoveClock: number): number {
    return fullMoveClock + 1;
}

export function incrementHalfMoveClock(halfMoveClock: number): number {
    return halfMoveClock + 1;
}

export function toggleHasToPlay(hasToPlay: string): string {
    return hasToPlay === "w" ? "b" : "w";
}

export function updateAvailableCastlings(availableCastlings: string, castlingLetter: string): string {
    const isWhiteCastling = castlingLetter.toUpperCase() === castlingLetter;
    if (isWhiteCastling) availableCastlings = availableCastlings.replace('KQ', '');
    else availableCastlings = availableCastlings.replace('kq', '');
    if (availableCastlings.length === 0) availableCastlings = '-';

    return availableCastlings;
}
