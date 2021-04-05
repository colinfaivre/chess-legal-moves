import Game from './game';

interface ILegalMoves {
    possibleMoves: string[];
    possibleKills: string[];
    playerIsChecked: boolean;
}

export default function getLegalMoves(gameFenString: string): ILegalMoves {
    const game = new Game(gameFenString);
    console.log(game.board);
    console.log('allPieces : ', game.allPieces);
    console.log('playerPieces : ', game.playerPieces);
    console.log('opponentPieces : ', game.opponentPieces);
    console.log('computeValidMoves for first white knight', game.computeValidMoves(game.playerPieces[3]));
    console.log('playerValidMoves', game.playerValidMoves);

    return {
        possibleMoves: ['a2a3', 'a2a4'],
        possibleKills: ['a2b3'],
        playerIsChecked: false,
    }
}
