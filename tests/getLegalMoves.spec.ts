import getLegalMoves from "../src/index";

test("Testing 'getLegalMoves' function", () => {
    expect(getLegalMoves('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')).toStrictEqual({
        legalMoves: [
            {
                from: 'a2',
                quietMoves: ['a3', 'a4'],
                killMoves: ['b3'],
            },
            {
                from: 'b2',
                quietMoves: ['b3', 'b4'],
                killMoves: ['a3'],
            }
        ],
        gameState: {
            isChecked: false,
            isCheckMated: false,
            isDraw: false,
        }
    });
});
