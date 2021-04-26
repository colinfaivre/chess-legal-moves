import BitBoard from '../bitboard/bitboard';

export default class Board {
    whites = new BitBoard();
    blacks = new BitBoard();
    pawns = new BitBoard();
    rooks = new BitBoard();
    knights = new BitBoard();
    bishops = new BitBoard();
    kings = new BitBoard();
    queens = new BitBoard();

    constructor(piecesPositions: string) {
        this.feedBitBoards(piecesPositions);
    }

    feedBitBoards(piecesPositions: string) {
        const rows: string[] = piecesPositions.split('/');

        let pos = 0;
        rows.forEach((row) => {
            row.split('').forEach((char) => {
                if (/[0-9]/.test(char)) {
                    pos += parseInt(char);
                } else {
                    (this as any)[letterToType(char)].setBit(pos);
                    (this as any)[letterToColor(char)].setBit(pos);
                    pos++;
                }
            });
        });
    }

    get allPieces() {
        return this.whites.or(this.blacks);
    }

    // WHITE PIECES
    get whitePawns() {
        return this.whites.and(this.pawns);
    }
    get whiteRooks() {
        return this.whites.and(this.rooks);
    }
    get whiteKnights() {
        return this.whites.and(this.knights);
    }
    get whiteBishop() {
        return this.whites.and(this.bishops);
    }
    get whiteQueen() {
        return this.whites.and(this.queens);
    }
    get whiteKing() {
        return this.whites.and(this.kings);
    }

    // BLACK PIECES
    get blackPawns() {
        return this.blacks.and(this.pawns);
    }
    get blackRooks() {
        return this.blacks.and(this.rooks);
    }
    get blackKnights() {
        return this.blacks.and(this.knights);
    }
    get blackBishop() {
        return this.blacks.and(this.bishops);
    }
    get blackQueen() {
        return this.blacks.and(this.queens);
    }
    get blackKing() {
        return this.blacks.and(this.kings);
    }
}

function letterToColor(letter: string) {
    return letter.toUpperCase() === letter ? 'blacks' : 'whites';
}
  
function letterToType(letter: string): string {
    const types: any = {
        p: 'pawns',
        r: 'rooks',
        n: 'knights',
        b: 'bishops',
        k: 'kings',
        q: 'queens',
    }

    return types[letter.toLowerCase()]
}