import showPossiblePlays from "../src/showPossiblePlays";

test("Testing 'showPossiblePlays' function", () => {
    expect(showPossiblePlays()).toStrictEqual({
        "possibleMoves": ['a2a3', 'a2a4'],
        "possibleKills": ['a2b3'],
    });
});
