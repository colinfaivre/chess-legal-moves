import Game from "../src/game/Game";

test("constructor() | invalid fen string", () => {
    expect(() => { new Game('& w KQkq - 0 1') }).toThrow();
});

test("constructor() | valid fen string", () => {
    expect(() => { new Game('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1') }).not.toThrow();
});

test("addMove() | valid move", () => {
    const game = new Game('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    expect(() => { game.addMove('a2a4') }).not.toThrow();
});

test("addMove() | valid move with promotion", () => {
    const game = new Game('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    expect(() => { game.addMove('a7a8q') }).not.toThrow();
});

test("addMove() | valid move with castling", () => {
    const game = new Game('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    expect(() => { game.addMove('e1g1') }).not.toThrow();
});

test("addMove() | invalid move", () => {
    const game = new Game('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    expect(() => { game.addMove('&3a4') }).toThrow();
});