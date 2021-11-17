import Game from './game';

interface ILegalMoves {
    quietMoves: string[];
    captureMoves: string[];
    playerIsChecked: boolean;
    isDraw: boolean;
}

export default function chessLegalMoves(gameFenString: string): ILegalMoves {
    const game = new Game(gameFenString);
    console.log(game.allPieces);
    console.log(game.pawns);
    console.log(game.rooks);

    return game.generateLegalMoves();
}
