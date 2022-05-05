import Game from "../src/game/Game";

test("constructor() | invalid fen string", () => {
    expect(() => { new Game('& w KQkq - 0 1') }).toThrow();
});

test("constructor() | valid fen string", () => {
    expect(() => { new Game('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1') }).not.toThrow();
});