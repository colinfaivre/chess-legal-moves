import validate from "../src/helpers/validate";

test("validate.fenString() | invalid fen string", () => {
    expect(() => { validate.fenString('& w KQkq - 0 1') }).toThrow();
});

test("validate.fenString() | valid fen string", () => {
    expect(() => { validate.fenString('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1') }).not.toThrow();
});

test("validate.move() | common move", () => {
    expect(() => { validate.move('a2a4') }).not.toThrow();
});

test("validate.move() | promotion move", () => {
    expect(() => { validate.move('a7a8q') }).not.toThrow();
});

test("validate.move() | castling move", () => {
    expect(() => { validate.move('e1g1') }).not.toThrow();
});

test("validate.move() | invalid move", () => {
    expect(() => { validate.move('&3a4') }).toThrow();
});