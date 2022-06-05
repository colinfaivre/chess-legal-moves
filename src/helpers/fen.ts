import { IGameState, IColor } from '../types';

export function stateToFen(state: IGameState): string {
  return `${state.fenBoard} ${state.hasToPlay} ${state.availableCastlings} ${state.enPassantTarget} ${state.halfMoveClock} ${state.fullMoveClock}`;
}

export function fenToState(fen: string): IGameState {
  const fenArray = fen.split(' ');

  return {
    fenBoard: fenArray[0],
    hasToPlay: fenArray[1] as IColor,
    availableCastlings: fenArray[2],
    enPassantTarget: fenArray[3],
    halfMoveClock: parseInt(fenArray[4]),
    fullMoveClock: parseInt(fenArray[5]),
  };
}
