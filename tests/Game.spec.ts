import Game from "../src/game/Game";

test("constructor() | invalid fen string", () => {
    expect(() => { new Game('& w KQkq - 0 1') }).toThrow();
});

test("constructor() | valid fen string", () => {
    expect(() => { new Game('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1') }).not.toThrow();
});

test("validateMove() | common move", () => {
    const game = new Game('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    expect(() => { game.validateMove('a2a4') }).not.toThrow();
});

test("validateMove() | promotion move", () => {
    const game = new Game('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    expect(() => { game.validateMove('a7a8q') }).not.toThrow();
});

test("validateMove() | castling move", () => {
    const game = new Game('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    expect(() => { game.validateMove('e1g1') }).not.toThrow();
});

test("validateMove() | invalid move", () => {
    const game = new Game('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    expect(() => { game.validateMove('&3a4') }).toThrow();
});

test("addMove() | addMove", () => {
    const game = new Game('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    expect(game.addMove('a2a4')).toStrictEqual('rnbqkbnr/pppppppp/8/8/P7/8/.PPPPPPP/RNBQKBNR b KQkq a3 0 1');
});
