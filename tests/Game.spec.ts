import Game from "../src/game/Game";

test("addMove() | addMove", () => {
    const game = new Game('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    expect(game.addMove('a2a4')).toStrictEqual('rnbqkbnr/pppppppp/8/8/P7/8/.PPPPPPP/RNBQKBNR b KQkq a3 0 1');
});
