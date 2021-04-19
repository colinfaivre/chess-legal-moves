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
    columnIndex?: number,
    rowIndex?: number,
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
    kill?: boolean,
    columnIndex: number,
    rowIndex: number,
}
