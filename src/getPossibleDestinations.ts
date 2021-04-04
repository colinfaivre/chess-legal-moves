import {
    KNIGHT_MOVES,
    KING_MOVES,
    BISHOP_MOVES,
    ROOK_MOVES,
    QUEEN_MOVES,
} from './moves';

import {
    ICell,
    ICellPosition,
} from './types/board';

export default function getPossibleDestinations(board: ICell[][], fromCell: ICellPosition) {
    const pieceType = board[fromCell.columnIndex][fromCell.rowIndex].piece?.type;
    const pieceColor = board[fromCell.columnIndex][fromCell.rowIndex].piece?.color;

    let possibleDestinations: ICellPosition[] = [];

    if (pieceType === 'knight') {
        for (const knightMoveSerie of KNIGHT_MOVES) {
            for (const knightMove of knightMoveSerie) {
                possibleDestinations.push(validateMove(...knightMove));
            }
        }
    }

    if (pieceType === 'rook') {
        for (const rookMoveSerie of ROOK_MOVES) {
            for (const rookMove of rookMoveSerie) {
                if (validateMove(...rookMove) === null) {
                    break;
                }
                possibleDestinations.push(validateMove(...rookMove));
                if (validateMove(...rookMove).kill === true) {
                    break;
                }
            }
        }
    }

    if (pieceType === 'bishop') {
        for (const bishopMoveSerie of BISHOP_MOVES) {
            for (const bishopMove of bishopMoveSerie) {
                if (validateMove(...bishopMove) === null) {
                    break;
                }
                possibleDestinations.push(validateMove(...bishopMove));
                if (validateMove(...bishopMove).kill === true) {
                    break;
                }
            }
        }
    }

    if (pieceType === 'queen') {
        for (const queenMoveSerie of QUEEN_MOVES) {
            for (const queenMove of queenMoveSerie) {
                if (validateMove(...queenMove) === null) {
                    break;
                }
                possibleDestinations.push(validateMove(...queenMove));
                if (validateMove(...queenMove).kill === true) {
                    break;
                }
            }
        }
    }

    if (pieceType === 'king') {
        for (const kingMoveSerie of KING_MOVES) {
            for (const kingMove of kingMoveSerie) {
                possibleDestinations.push(validateMove(...kingMove));
            }
        }
    }

    if (pieceType === 'pawn') {
        if (pieceColor === 'white') {
            // White pawn moves by one cell forward
            if (board[fromCell.columnIndex][fromCell.rowIndex + 1].piece === null) {
                // board[fromCell.columnIndex][fromCell.rowIndex + 1].possibleDestination = true;
                possibleDestinations.push({
                    kill: false,
                    columnIndex: fromCell.columnIndex,
                    rowIndex: fromCell.rowIndex + 1,
                })
            }
            // White pawn moves by two cells forward
            if (fromCell.rowIndex === 1 && board[fromCell.columnIndex][fromCell.rowIndex + 2].piece === null) {
                // board[fromCell.columnIndex][fromCell.rowIndex + 2].possibleDestination = true;
                possibleDestinations.push({
                    kill: false,
                    columnIndex: fromCell.columnIndex,
                    rowIndex: fromCell.rowIndex + 2,
                })
            }
            // White pawn takes opponent on right/forward diagonal
            if (destinationColumnIsOnBoard(fromCell.columnIndex + 1) && board[fromCell.columnIndex + 1][fromCell.rowIndex + 1].piece !== null && board[fromCell.columnIndex + 1][fromCell.rowIndex + 1].piece?.color !== pieceColor) {
                // board[fromCell.columnIndex + 1][fromCell.rowIndex + 1].possibleKill = true;
                possibleDestinations.push({
                    kill: true,
                    columnIndex: fromCell.columnIndex + 1,
                    rowIndex: fromCell.rowIndex + 1,
                })
            }
            // White pawn takes opponent on left/forward diagonal
            if (destinationColumnIsOnBoard(fromCell.columnIndex - 1) && board[fromCell.columnIndex - 1][fromCell.rowIndex + 1].piece !== null && board[fromCell.columnIndex - 1][fromCell.rowIndex + 1].piece?.color !== pieceColor) {
                // board[fromCell.columnIndex - 1][fromCell.rowIndex + 1].possibleKill = true;
                possibleDestinations.push({
                    kill: true,
                    columnIndex: fromCell.columnIndex - 1,
                    rowIndex: fromCell.rowIndex + 1,
                })
            }
        }

        if (pieceColor === 'black') {
            // Black pawn takes opponent on right/forward diagonal
            if (destinationColumnIsOnBoard(fromCell.columnIndex - 1) && board[fromCell.columnIndex - 1][fromCell.rowIndex - 1].piece !== null && board[fromCell.columnIndex - 1][fromCell.rowIndex - 1].piece?.color !== pieceColor) {
                // board[fromCell.columnIndex - 1][fromCell.rowIndex - 1].possibleKill = true;
                possibleDestinations.push({
                    kill: true,
                    columnIndex: fromCell.columnIndex - 1,
                    rowIndex: fromCell.rowIndex - 1,
                })
            }
            // Black pawn takes opponent on left/forward diagonal
            if (destinationColumnIsOnBoard(fromCell.columnIndex + 1) && board[fromCell.columnIndex + 1][fromCell.rowIndex - 1].piece !== null && board[fromCell.columnIndex + 1][fromCell.rowIndex - 1].piece?.color !== pieceColor) {
                // board[fromCell.columnIndex + 1][fromCell.rowIndex - 1].possibleKill = true;
                possibleDestinations.push({
                    kill: true,
                    columnIndex: fromCell.columnIndex + 1,
                    rowIndex: fromCell.rowIndex - 1,
                })
            }
        }

        function destinationColumnIsOnBoard(position: number) {
            return position >= 0 && position < 7;
        }
    }

    possibleDestinations = removeUnreachableDestinations(possibleDestinations);
    possibleDestinations = splitIntoNormalAndKills(possibleDestinations);

    return possibleDestinations;

    function validateMove(columnMove: number, rowMove: number): object | null {
        if (destinationIsOnBoard(fromCell, columnMove, rowMove)) {
            if (destinationIsFree()) {
                return {
                    kill: false,
                    columnIndex: fromCell.columnIndex + columnMove,
                    rowIndex: fromCell.rowIndex + rowMove,
                }
            }
            if (destinationIsOpponent()) {
                return {
                    kill: true,
                    columnIndex: fromCell.columnIndex + columnMove,
                    rowIndex: fromCell.rowIndex + rowMove,
                }
            }
            return null;
        }
        return null;

        function destinationIsOpponent(): boolean {
            return board[fromCell.columnIndex + columnMove][fromCell.rowIndex + rowMove].piece?.color !== board[fromCell.columnIndex][fromCell.rowIndex].piece?.color;
        }
        function destinationIsFree(): boolean {
            return board[fromCell.columnIndex + columnMove][fromCell.rowIndex + rowMove].piece === null;
        }
        function destinationIsOnBoard(cellPosition: ICellPosition, columnMove: number, rowMove: number): boolean {
            const destinationCellIsInRow = cellPosition.rowIndex + rowMove >= 0 && cellPosition.rowIndex + rowMove <= 7;
            const destinationCellIsInColumn = cellPosition.columnIndex + columnMove >= 0 && cellPosition.columnIndex + columnMove <= 7;
            const result = destinationCellIsInColumn && destinationCellIsInRow;
            return result;
        }
    }

    function removeUnreachableDestinations(destinations: ICellPosition[]): ICellPosition[] {
        return destinations.filter(destination => destination !== null);
    }

    function splitIntoNormalAndKills(destinations: ICellPosition[]): object {
        return {
            normal: destinations.filter(destination => destination.kill === false),
            kills: destinations.filter(destination => destination.kill === true),
        }
    }
}
