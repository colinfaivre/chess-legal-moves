import regex from '../helpers/regex'
import {
    IUpdateFenBoardResult,
    IParsedMove,
    ICastlingMap,
} from '../types';

export default function updateFenBoard(
    move: string,
    fenBoard: string
): IUpdateFenBoardResult {
    const boardArray = parseBoard(fenBoard);

    let castlingLetter: string;
    let enPassantTarget: string;

    const parsedMove = parseMove(move);
    const [fromIndex, toIndex] = parsedMove.move;
    const pieceToMove = parsedMove.promotionPiece ? parsedMove.promotionPiece : boardArray[fromIndex];
    boardArray[fromIndex] = ".";
    boardArray[toIndex] = pieceToMove;

    if (parsedMove.castling) {
        const [rookFromIndex, rookToindex] = parsedMove.castling.rookMove;
        boardArray[rookFromIndex] = ".";
        boardArray[rookToindex] = pieceToMove;
        castlingLetter = parsedMove.castling.letter;
    }

    const result: IUpdateFenBoardResult = {
        fenBoard : composeBoardArrayToString(boardArray),
    }

    if (castlingLetter) result.castlingLetter = castlingLetter; 
    if (enPassantTarget) result.enPassantTarget = enPassantTarget;

    return result;
}

export function parseBoard(boardString: string): string[] {
	var boardCells: string[] = [];
	var rankList = getRanks(boardString);

	for (let i = rankList.length - 1; i >= 0; i--) {
		boardCells.push(...getRankCells(rankList[i]));
	}

	return boardCells
}

export function getRanks(boardString: string): string[] {
	return boardString.split("/");
}

export function getRankCells(rank: string): string[] {
	rank = convertNumbersToPoints(rank);
	return rank.split("");
}

export function convertNumbersToPoints(rank: string): string {
	for (let i = 1; i <= 8; i++) {
		rank = rank.replaceAll(i.toString(), ".".repeat(i));
	}

	return rank;
}

export function parseMove(moveString: string): IParsedMove {
    const from = moveString.substring(0, 2);
    const to = moveString.substring(2, 4);
    const parsedMove: IParsedMove = {
        move: [
            mapPositionToBoardIndex(from), 
            mapPositionToBoardIndex(to)
        ],
    };

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
        
        parsedMove.enPassantTarget = from
        parsedMove.enPassantTarget = parsedMove.enPassantTarget.replace('2', '3');
        parsedMove.enPassantTarget = parsedMove.enPassantTarget.replace('7', '6');
    }

    return parsedMove;
}

export function mapPositionToBoardIndex(position: string): number {
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

export function composeBoardArrayToString(board: string[]): string {
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

export function convertPointsToNumbers(boardString: string): string {
    boardString = boardString.replaceAll(/\.{8}/g, "8");
    boardString = boardString.replaceAll(/\.{7}/g, "7");
    boardString = boardString.replaceAll(/\.{6}/g, "6");
    boardString = boardString.replaceAll(/\.{5}/g, "5");
    boardString = boardString.replaceAll(/\.{4}/g, "4");
    boardString = boardString.replaceAll(/\.{3}/g, "3");
    boardString = boardString.replaceAll(/\.{2}/g, "2");

	return boardString
}