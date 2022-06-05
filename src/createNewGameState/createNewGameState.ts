import { parseBoard } from './parseBoard';
import { parseMove } from './parseMove';
import { composeBoardArrayToString } from './composeBoardArrayToString';
import {
  isPawn,
  isCapture,
  updateFenBoard,
  incrementFullMoveClock,
  incrementHalfMoveClock,
  toggleHasToPlay,
  updateAvailableCastlings,
} from './helpers';
import { IGameState } from '../types';

/**
 * Creates new game state from the current state and the added move
 * @param move - a string representing a move in long UCI notation
 * @param state - an IGameState object representing the current state of the game
 * @returns the new game state after the move is added
 *
 * @internal
 */
export default function createNewGameState(
  move: string,
  state: IGameState
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

  boardArray[fromIndex] = '.';
  boardArray[toIndex] = parsedMove.promotionPiece
    ? parsedMove.promotionPiece
    : pieceToMove;

  if (parsedMove.castling) {
    const [rookFromIndex, rookToindex] = parsedMove.castling.rookMove;
    boardArray[rookFromIndex] = '.';
    boardArray[rookToindex] = state.hasToPlay === 'w' ? 'R' : 'r';
    castlingLetter = parsedMove.castling.letter;
  }

  // Updates the state before returning it
  state.fenBoard = updateFenBoard(composeBoardArrayToString(boardArray));
  if (state.hasToPlay === 'b')
    state.fullMoveClock = incrementFullMoveClock(state.fullMoveClock);
  if (isHalfMoveClockMove)
    state.halfMoveClock = incrementHalfMoveClock(state.halfMoveClock);
  if (castlingLetter)
    state.availableCastlings = updateAvailableCastlings(
      state.availableCastlings,
      castlingLetter
    );
  if (parsedMove.enPassantTarget)
    state.enPassantTarget = parsedMove.enPassantTarget;
  state.hasToPlay = toggleHasToPlay(state.hasToPlay);

  return state;
}
