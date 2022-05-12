import Game from './game/Game';
import { IGameScan } from './types';

export default function chessLegalMoves(gameFenString: string): IGameScan {
    const game = new Game(gameFenString);

    return {
        legalMoves: game.legalMoves,
        gameState: game.gameState,
    }
}
