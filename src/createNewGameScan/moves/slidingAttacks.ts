import BitBoard from "../BitBoard/BitBoard"

export function rankMask(sq: number): BitBoard {
    let result: BitBoard = BitBoard.fromHex('00000000000000ff').shiftLeft(sq & 56)

    return  result;
}

export function fileMask(sq: number): BitBoard {
    const result: BitBoard = BitBoard.fromHex('0101010101010101').shiftLeft(sq & 7);

    return result;
}

export function diagonalMask(sq: number): BitBoard {
    let result: BitBoard;
    const mainDiagonal = BitBoard.fromHex('8040201008040201');
    const diagonal = 8 * (sq & 7) - (sq & 56);
    const north = -diagonal & ( diagonal >> 31);
    const south =  diagonal & (-diagonal >> 31);
    result = mainDiagonal.shiftRight(south).shiftLeft(north);

    return result;
}

export function antiDiagonalMask(sq: number): BitBoard {
    let result: BitBoard;
    const mainDiagonal = BitBoard.fromHex('0102040810204080');
    const diagonal = 56 - 8*(sq & 7) - (sq & 56);
    const north = -diagonal & ( diagonal >> 31);
    const south = diagonal & (-diagonal >> 31);
    result = mainDiagonal.shiftRight(south).shiftLeft(north)

    return result;
}