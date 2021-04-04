import getPossiblePlays from "../src/getPossiblePlays";

test("Testing 'showPossiblePlays' function", () => {
    expect(getPossiblePlays('qsdfqsfd')).toStrictEqual({
        "possibleMoves": ['a2a3', 'a2a4'],
        "possibleKills": ['a2b3'],
        "playerIsChecked": false,
    });
});
