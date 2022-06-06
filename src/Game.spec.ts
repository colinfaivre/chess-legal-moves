import Game from './index';
import {
  legalMovesFromstartingPosition,
  legalMovesKnight,
} from '../tests/factories/startingPosition';

test('getLegalMoves() | starting position', () => {
  const game = new Game(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
  );
  expect(game.scan.legalMoves).toStrictEqual(legalMovesFromstartingPosition);
  expect(game.scan.kingState).toStrictEqual({
    isChecked: false,
    isCheckMated: false,
    isDraw: false,
  });
});

test('getLegalMoves() | knight', () => {
  const game = new Game('8/8/8/8/8/4n3/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
  expect(game.scan.legalMoves).toStrictEqual(legalMovesKnight);
  expect(game.scan.kingState).toStrictEqual({
    isChecked: false,
    isCheckMated: false,
    isDraw: false,
  });
});

test('addMove() | addMove', () => {
  const game = new Game(
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
  );
  expect(game.addMove('a2a4')).toStrictEqual(
    'rnbqkbnr/pppppppp/8/8/P7/8/.PPPPPPP/RNBQKBNR b KQkq a3 0 1'
  );
});
