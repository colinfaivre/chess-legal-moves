interface ICastlingMap {
    [key: string]: {
        moveIndexes: [number, number], castlingLetter: string
    }
}

import regex from '../helpers/regex'
import {
    IPieceLetter,
    IPieceName,
    ILetterToPieceMap,
} from '../types'
import BitBoard from '../bitboard/bitboard';

export default class Board {
    boardString: string;
    boardArray: string[];

    whites = new BitBoard();
    blacks = new BitBoard();
    pawns = new BitBoard();
    rooks = new BitBoard();
    knights = new BitBoard();
    bishops = new BitBoard();
    kings = new BitBoard();
    queens = new BitBoard();

    constructor(boardString: string) {
        this.feedBoard(boardString);
    }

    feedBoard(boardString: string) {
        this.boardString = boardString;
        this.boardArray = parseBoard(boardString);
        const rows: string[] = boardString.split('/');

        let pos = 0;
        rows.forEach((row) => {
            row.split('').forEach((char: IPieceLetter) => {
                if (/[0-9]/.test(char)) {
                    pos += parseInt(char);
                } else {
                    this[letterToType(char)].setBit(pos);
                    this[letterToColor(char)].setBit(pos);
                    pos++;
                }
            });
        });
    }

    addMove(move: string): {castlingLetter?: string, enPassantTarget?: string} {
        let addMoveData: {castlingLetter?: string, enPassantTarget?: string} = {};

        const parsedMove = this.parseMove(move);
        const [fromIndex, toIndex] = parsedMove.move;
        const pieceToMove = parsedMove.promotionPiece ? parsedMove.promotionPiece : this.boardArray[fromIndex];
        this.boardArray[fromIndex] = ".";
        this.boardArray[toIndex] = pieceToMove;

        if (parsedMove.castling) {
            const [rookFromIndex, rookToindex] = parsedMove.castling.rookMove;
            this.boardArray[rookFromIndex] = ".";
            this.boardArray[rookToindex] = pieceToMove;
            addMoveData.castlingLetter = parsedMove.castling.letter;
        }

        this.boardString = composeBoardArrayToString(this.boardArray);

        return addMoveData;
    }

    parseMove(moveString: string): IParsedMove {
        const from = moveString.substring(0, 2);
        const to = moveString.substring(2);
        const parsedMove: IParsedMove = { move: [mapPositionToBoardIndex(from), mapPositionToBoardIndex(to)] };
    
        const isPromotionMove = moveString.match(regex.promotionMove);
        if (isPromotionMove) parsedMove.promotionPiece = moveString.substring(4);
    
        const isCastlingMove = moveString.match(regex.castlingMove);
        const castlingMap: ICastlingMap = {
            'e1g1': { moveIndexes: [7, 5], castlingLetter: 'K' },
            'e1c1': { moveIndexes: [0, 3], castlingLetter: 'Q' },
            'e8g8': { moveIndexes: [63, 61], castlingLetter: 'k' },
            'e8c8': { moveIndexes: [56, 59], castlingLetter: 'q' },
        };
        if (isCastlingMove) parsedMove.castling = {
            rookMove: castlingMap[moveString].moveIndexes,
            letter: castlingMap[moveString].castlingLetter,
        }

        const isPawnDoubleMove = moveString.match(regex.pawnDoubleMove);
        if (isPawnDoubleMove) {
            const from = moveString.substring(0, 2);

            parsedMove.enPassantTarget = from.replace('2', '3');
            parsedMove.enPassantTarget = from.replace('7', '6');
        }
    
        return parsedMove;
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
    get whiteBishops() {
        return this.whites.and(this.bishops);
    }
    get whiteQueens() {
        return this.whites.and(this.queens);
    }
    get whiteKing() {
        return this.whites.and(this.kings);
    }
    get quietDestinations() {
        return this.whites.not().and(this.blacks.not());
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

interface IParsedMove {
    move: [number, number];
    promotionPiece?: string;
    castling?: {
        rookMove: [number, number];
        letter: string;
    }
    enPassantTarget?: string;
}

function mapPositionToBoardIndex(position: string): number {
	const filesLetter = ["a", "b", "c", "d", "e", " f", "g", "h"];
	const indexMap: {[key: string]: number} = {};
	let counter = 0;

	for (let rank = 1; rank <= 8; rank++) {
		for (let fileIndex = 0; fileIndex < filesLetter.length; fileIndex++) {
			indexMap[filesLetter[fileIndex] + rank.toString()] = counter
			counter++
		}
	}

	return indexMap[position]
}

function composeBoardArrayToString(board: string[]): string {
	const eightRankString = board.slice(56).join("");
	const sevenRankString = board.slice(48,56).join("");
	const sixRankString = board.slice(40,48).join("");
	const fiveRankString = board.slice(32,40).join("");
	const fourRankString = board.slice(24,32).join("");
	const threeRankString = board.slice(16,24).join("");
	const twoRankString = board.slice(8,16).join("");
	const oneRankString = board.slice(0,8).join("");

	const boardStrings = [
		eightRankString,
		sevenRankString,
		sixRankString,
		fiveRankString,
		fourRankString,
		threeRankString,
		twoRankString,
		oneRankString,
    ];

	return convertPointsToNumbers(boardStrings.join("/"))
}

function convertPointsToNumbers(boardString: string): string {
	for (let i = 8; i >= 2; i--) {
		boardString = boardString.replace(".".repeat(i), i.toString())
	}

	return boardString
}

function letterToColor(letter: string) {
    return letter.toUpperCase() === letter ? 'blacks' : 'whites';
}

function letterToType(letter: IPieceLetter): IPieceName {
    const types: ILetterToPieceMap = {
        p: 'pawns',
        r: 'rooks',
        n: 'knights',
        b: 'bishops',
        k: 'kings',
        q: 'queens',
        P: 'pawns',
        R: 'rooks',
        N: 'knights',
        B: 'bishops',
        K: 'kings',
        Q: 'queens',
    }

    return types[letter]
}

function parseBoard(boardString: string): string[] {
	var boardCells: string[] = [];
	var rankList = getRanks(boardString);

	for (let i = rankList.length - 1; i >= 0; i--) {
		boardCells.push(...getRankCells(rankList[i]));
	}

	return boardCells
}

function getRanks(boardString: string): string[] {
	return boardString.split("/");
}

function getRankCells(rank: string): string[] {
	rank = convertNumbersToPoints(rank);
	return rank.split("");
}

function convertNumbersToPoints(rank: string): string {
	for (let i = 1; i <= 8; i++) {
		rank = rank.replace(i.toString(), ".".repeat(i));
	}

	return rank;
}