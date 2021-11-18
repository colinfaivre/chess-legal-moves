import { IMovesFromPosition } from "../types"

export function generateKnightsMoves(): IMovesFromPosition[] {
    // Iterate through knights bitboard to get one bitboard for each knight
    // From the 2 individual knights bitboard generate all possible moves
    // const movesFromPosition: IMovesFromPosition = {
    //     from: getPositionFromBitBoard(),
    //     quietMoves: getQuietMoves(),
    //     killMoves: getKillMoves(),
    // }

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

export function generatePawnsMoves(): IMovesFromPosition[] {
    return [
        {
            from: 'a2',
            quietMoves: ['a3', 'a4'],
            killMoves: [],
        },
        {
            from: 'b2',
            quietMoves: ['b3', 'b4'],
            killMoves: [],
        },
        {
            from: 'c2',
            quietMoves: ['c3', 'c4'],
            killMoves: [],
        },
        {
            from: 'd2',
            quietMoves: ['d3', 'd4'],
            killMoves: [],
        },
        {
            from: 'e2',
            quietMoves: ['e3', 'e4'],
            killMoves: [],
        },
        {
            from: 'f2',
            quietMoves: ['f3', 'f4'],
            killMoves: [],
        },
        {
            from: 'g2',
            quietMoves: ['g3', 'g4'],
            killMoves: [],
        },
        {
            from: 'h2',
            quietMoves: ['h3', 'h4'],
            killMoves: [],
        },
    ]
}

export function generateRooksMoves(): IMovesFromPosition[] {
    return [
        {
            from: 'a1',
            quietMoves: [],
            killMoves: [],
        },
        {
            from: 'h1',
            quietMoves: [],
            killMoves: [],
        },
    ]
}

export function generateBishopsMoves(): IMovesFromPosition[] {
    return [
        {
            from: 'a3',
            quietMoves: [],
            killMoves: [],
        },
        {
            from: 'a6',
            quietMoves: [],
            killMoves: [],
        },
    ]
}

export function generateQueensMoves(): IMovesFromPosition[] {
    return [
        {
            from: 'a4',
            quietMoves: [],
            killMoves: [],
        },
    ]
}

export function generateKingMoves(): IMovesFromPosition[] {
    return [
        {
            from: 'a5',
            quietMoves: [],
            killMoves: [],
        },
    ]
}