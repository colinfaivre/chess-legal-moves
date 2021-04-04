export interface IBoardState {
    playerColor: string,
    initialBoardSnapshot: string[],
    board: ICell[][],
    hasToPlay: string,
    selectedPiece: IPiece | null,
    round: number,
    moves: string[],
    moveStart: string | null,
    moveEnd: string | null,
    playerCapturedPieces: IPiece[],
    computerCapturedPieces: IPiece[],
}

export interface ICell {
    color: string,
    piece: IPiece | null,
    possibleDestination: boolean,
    possibleKill: boolean,
    anCoords: string,
}

export interface IPiece {
    color: string,
    type: string,
    selected: boolean,
}

export interface IPath {
    from: ICellPosition,
    to: ICellPosition,
}

export interface ICellPosition {
    columnIndex: number,
    rowIndex: number,
}

export interface IMove {
    startPosition: ICellPosition,
    endPosition: ICellPosition,
}
