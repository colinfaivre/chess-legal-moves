type IPositionTable = string[];

export function createPositionTable(): IPositionTable {
    const positionsTable: IPositionTable = []
    for (let i = 0; i < 64; i++) {
        positionsTable.push(generatePosition(i))
    }
    
    return positionsTable;
}

export function generatePosition(i: number): string {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const columnLetter = letters[i % 8];
    const rankNumber = Math.floor(i / 8) + 1;
    
    return `${columnLetter}${rankNumber}`;
}

export const positionsTable = createPositionTable();