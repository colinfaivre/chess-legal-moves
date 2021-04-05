import getLegalMoves from "../src/getLegalMoves";

test("Testing 'getLegalMoves' function", () => {
    expect(getLegalMoves('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')).toStrictEqual({
        "possibleMoves": ['a2a3', 'a2a4'],
        "possibleKills": ['a2b3'],
        "playerIsChecked": false,
    });
});
