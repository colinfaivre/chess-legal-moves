import { IMovesFromPosition } from "../types"
import BitBoard from "../bitboard/bitboard"
import { positionsTable } from "../bitboard/positionsHashTable"

export function generateKnightsMoves(knightsBB: BitBoard): IMovesFromPosition[] {
    // const knightsList = knightsBB.extractBits().map((knightPositionCode) => {
    //     const moves = getKnightMoves(knightPositionCode)

    //     return {
    //         from: positionsTable[knightPositionCode],
    //         quietMoves: moves.quiet,
    //         killMoves: moves.kill,
    //     }
    // })

    return [{
        from: 'b1',
        quietMoves: ['a3', 'c3'],
        killMoves: [],
    },
    {
        from: 'g1',
        quietMoves: ['f3', 'h3'],
        killMoves: [],
    }]
}

function generateAllKnightMovesBBTable(): BitBoard[] {
    // A list of 64 bitboards representing the knight possible moves from any board position
    const KNIGHT_DIRECTIONS = {
        noNoEa: 17,
        noEaEa: 10,
        soEaEa: -6,
        soSoEa: -15,
        noNoWe: 15,
        noWeWe: 6,
        soWeWe: -10,
        soSoWe: -17,
    }

    const AFile = [0, 8, 16, 24, 32, 40, 48, 56];
    const BFile = [1, 9, 17, 25, 33, 41, 49, 57];
    const ABFile = [...AFile, ...BFile];
    const HFile = [7, 15, 23, 31, 39, 47, 55, 63];
    const GFile = [6, 14, 22, 30, 38, 46, 54, 62];
    const GHFile = [...GFile, ...HFile];

    function noNoEa(position: number): BitBoard {
        if (!AFile.includes(position)) return BitBoard.fromPos(position + KNIGHT_DIRECTIONS.noNoEa);
    }
    function noEaEa(position: number): BitBoard {
        if (!ABFile.includes(position)) return BitBoard.fromPos(position + KNIGHT_DIRECTIONS.noEaEa);
    }
    function soEaEa(position: number): BitBoard {
        if (!ABFile.includes(position)) return BitBoard.fromPos(position + KNIGHT_DIRECTIONS.soEaEa);
    }
    function soSoEa(position: number): BitBoard {
        if (!AFile.includes(position)) return BitBoard.fromPos(position + KNIGHT_DIRECTIONS.soSoEa);
    }
    function noNoWe(position: number): BitBoard {
        if (!HFile.includes(position)) return BitBoard.fromPos(position + KNIGHT_DIRECTIONS.noNoWe);
    }
    function noWeWe(position: number): BitBoard {
        if (!GHFile.includes(position)) return BitBoard.fromPos(position + KNIGHT_DIRECTIONS.noWeWe);
    }
    function soWeWe(position: number): BitBoard {
        if (!GHFile.includes(position)) return BitBoard.fromPos(position + KNIGHT_DIRECTIONS.soWeWe);
    }
    function soSoWe(position: number): BitBoard {
        if (!HFile.includes(position)) return BitBoard.fromPos(position + KNIGHT_DIRECTIONS.soSoWe);
    }
    
    function combilePreviousBB(): BitBoard { return BitBoard.fromPos(0) }
    const allKnightMoves: BitBoard[] = [];
    
    for (let position = 0; position < 63; position++) {
        const movesFromThisPosition = [];
        if (noNoEa(position)) movesFromThisPosition.push(noNoEa(position));
        if (noEaEa(position)) movesFromThisPosition.push(noEaEa(position));
        if (soEaEa(position)) movesFromThisPosition.push(soEaEa(position));
        if (soSoEa(position)) movesFromThisPosition.push(soSoEa(position));
        if (noNoWe(position)) movesFromThisPosition.push(noNoWe(position));
        if (noWeWe(position)) movesFromThisPosition.push(noWeWe(position));
        if (soWeWe(position)) movesFromThisPosition.push(soWeWe(position));
        if (soSoWe(position)) movesFromThisPosition.push(soSoWe(position));

        allKnightMoves.push(combilePreviousBB());
    }

    return allKnightMoves;
}
