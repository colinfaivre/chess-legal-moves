import { IGameState } from '../types';
import createNewGameState from './createNewGameState';

test('createNewGameState() | a2a4', () => {
  const gameState: IGameState = {
    fenBoard: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
    hasToPlay: 'w',
    availableCastlings: 'KQkq',
    enPassantTarget: '-',
    halfMoveClock: 0,
    fullMoveClock: 1,
  };
  const received = createNewGameState('a2a4', gameState);
  const expected = {
    fenBoard: 'rnbqkbnr/pppppppp/8/8/P7/8/.PPPPPPP/RNBQKBNR',
    hasToPlay: 'b',
    availableCastlings: 'KQkq',
    enPassantTarget: 'a3',
    halfMoveClock: 0,
    fullMoveClock: 1,
  };

  expect(received).toStrictEqual(expected);
});

test('createNewGameState() | g1f3', () => {
  const gameState: IGameState = {
    fenBoard: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
    hasToPlay: 'w',
    availableCastlings: 'KQkq',
    enPassantTarget: '-',
    halfMoveClock: 0,
    fullMoveClock: 1,
  };
  const received = createNewGameState('g1f3', gameState);
  const expected = {
    fenBoard: 'rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB.R',
    hasToPlay: 'b',
    availableCastlings: 'KQkq',
    enPassantTarget: '-',
    halfMoveClock: 1,
    fullMoveClock: 1,
  };

  expect(received).toStrictEqual(expected);
});

test('createNewGameState() | h2h4', () => {
  const gameState: IGameState = {
    fenBoard: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
    hasToPlay: 'w',
    availableCastlings: 'KQkq',
    enPassantTarget: '-',
    halfMoveClock: 0,
    fullMoveClock: 1,
  };
  const received = createNewGameState('h2h4', gameState);
  const expected = {
    fenBoard: 'rnbqkbnr/pppppppp/8/8/7P/8/PPPPPPP./RNBQKBNR',
    hasToPlay: 'b',
    availableCastlings: 'KQkq',
    enPassantTarget: 'h3',
    halfMoveClock: 0,
    fullMoveClock: 1,
  };
  expect(received).toStrictEqual(expected);
});

test('createNewGameState() | k castling', () => {
  const gameState: IGameState = {
    fenBoard: 'r3k2r/8/8/8/8/8/8/R3K2R',
    hasToPlay: 'b',
    availableCastlings: 'KQkq',
    enPassantTarget: '-',
    halfMoveClock: 0,
    fullMoveClock: 1,
  };
  const received = createNewGameState('e8g8', gameState);
  const expected = {
    fenBoard: 'r4rk./8/8/8/8/8/8/R3K2R',
    hasToPlay: 'w',
    availableCastlings: 'KQ',
    enPassantTarget: '-',
    halfMoveClock: 1,
    fullMoveClock: 2,
  };
  expect(received).toStrictEqual(expected);
});

test('createNewGameState() | q castling', () => {
  const gameState: IGameState = {
    fenBoard: 'r3k2r/8/8/8/8/8/8/R3K2R',
    hasToPlay: 'b',
    availableCastlings: 'kq',
    enPassantTarget: '-',
    halfMoveClock: 0,
    fullMoveClock: 1,
  };
  const received = createNewGameState('e8c8', gameState);
  const expected = {
    fenBoard: '2kr3r/8/8/8/8/8/8/R3K2R',
    hasToPlay: 'w',
    availableCastlings: '-',
    enPassantTarget: '-',
    halfMoveClock: 1,
    fullMoveClock: 2,
  };
  expect(received).toStrictEqual(expected);
});

test('createNewGameState() | K castling', () => {
  const gameState: IGameState = {
    fenBoard: 'r3k2r/8/8/8/8/8/8/R3K2R',
    hasToPlay: 'w',
    availableCastlings: 'KQkq',
    enPassantTarget: '-',
    halfMoveClock: 0,
    fullMoveClock: 1,
  };
  const received = createNewGameState('e1g1', gameState);
  const expected = {
    fenBoard: 'r3k2r/8/8/8/8/8/8/R4RK.',
    hasToPlay: 'b',
    availableCastlings: 'kq',
    enPassantTarget: '-',
    halfMoveClock: 1,
    fullMoveClock: 1,
  };
  expect(received).toStrictEqual(expected);
});

test('createNewGameState() | Q castling', () => {
  const gameState: IGameState = {
    fenBoard: 'r3k2r/8/8/8/8/8/8/R3K2R',
    hasToPlay: 'w',
    availableCastlings: 'KQ',
    enPassantTarget: '-',
    halfMoveClock: 0,
    fullMoveClock: 1,
  };
  const received = createNewGameState('e1c1', gameState);
  const expected = {
    fenBoard: 'r3k2r/8/8/8/8/8/8/2KR3R',
    hasToPlay: 'b',
    availableCastlings: '-',
    enPassantTarget: '-',
    halfMoveClock: 1,
    fullMoveClock: 1,
  };
  expect(received).toStrictEqual(expected);
});

test('createNewGameState() | Q promotion move', () => {
  const gameState: IGameState = {
    fenBoard: '8/P7/8/8/8/8/8/8',
    hasToPlay: 'w',
    availableCastlings: 'KQkq',
    enPassantTarget: '-',
    halfMoveClock: 0,
    fullMoveClock: 1,
  };
  const received = createNewGameState('a7a8Q', gameState);
  const expected = {
    fenBoard: 'Q7/8/8/8/8/8/8/8',
    hasToPlay: 'b',
    availableCastlings: 'KQkq',
    enPassantTarget: '-',
    halfMoveClock: 0,
    fullMoveClock: 1,
  };
  expect(received).toStrictEqual(expected);
});

test('createNewGameState() | N promotion move', () => {
  const gameState: IGameState = {
    fenBoard: '8/7P/8/8/8/8/8/8',
    hasToPlay: 'w',
    availableCastlings: 'KQkq',
    enPassantTarget: '-',
    halfMoveClock: 0,
    fullMoveClock: 1,
  };
  const received = createNewGameState('h7h8N', gameState);
  const expected = {
    fenBoard: '7N/8/8/8/8/8/8/8',
    hasToPlay: 'b',
    availableCastlings: 'KQkq',
    enPassantTarget: '-',
    halfMoveClock: 0,
    fullMoveClock: 1,
  };
  expect(received).toStrictEqual(expected);
});

test('createNewGameState() | b promotion move', () => {
  const gameState: IGameState = {
    fenBoard: '8/8/8/8/8/8/p7/8',
    hasToPlay: 'b',
    availableCastlings: 'KQkq',
    enPassantTarget: '-',
    halfMoveClock: 0,
    fullMoveClock: 1,
  };
  const received = createNewGameState('a2a1b', gameState);
  const expected = {
    fenBoard: '8/8/8/8/8/8/8/b7',
    hasToPlay: 'w',
    availableCastlings: 'KQkq',
    enPassantTarget: '-',
    halfMoveClock: 0,
    fullMoveClock: 2,
  };
  expect(received).toStrictEqual(expected);
});

test('createNewGameState() | r promotion move', () => {
  const gameState: IGameState = {
    fenBoard: '8/8/8/8/8/8/7p/8',
    hasToPlay: 'b',
    availableCastlings: 'KQkq',
    enPassantTarget: '-',
    halfMoveClock: 0,
    fullMoveClock: 1,
  };
  const received = createNewGameState('h2h1r', gameState);
  const expected = {
    fenBoard: '8/8/8/8/8/8/8/7r',
    hasToPlay: 'w',
    availableCastlings: 'KQkq',
    enPassantTarget: '-',
    halfMoveClock: 0,
    fullMoveClock: 2,
  };
  expect(received).toStrictEqual(expected);
});
