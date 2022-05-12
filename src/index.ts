import Game from './game/Game';
import { IGameScan } from './types';

export default function chessLegalMoves(gameFenString: string): IGameScan {
    // TODO just export the Game class
    const game = new Game(gameFenString);

    return {
        legalMoves: game.legalMoves,
        gameState: game.gameState,
    }
}
