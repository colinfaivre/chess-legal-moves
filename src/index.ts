import Game from './game';
import { ILegalMoves } from './types';

export default function chessLegalMoves(gameFenString: string): ILegalMoves {
    const game = new Game(gameFenString);

    return game.generateLegalMoves();
}
