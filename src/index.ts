import Game from './game/Game';
import { ILegalMoves } from './types';

export default function chessLegalMoves(gameFenString: string): ILegalMoves {
    const game = new Game(gameFenString);

    return game.generateLegalMoves();
}
