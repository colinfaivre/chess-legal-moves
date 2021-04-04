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
}

export interface IPath {
    from: ICellPosition,
    to: ICellPosition,
}

export interface IMove {
    startPosition: ICellPosition,
    endPosition: ICellPosition,
}

export interface ICellPosition {
    columnIndex: number,
    rowIndex: number,
}
