import validate from "../src/helpers/validate";

test("validate.fenString() | invalid fen string", () => {
    expect(() => { validate.fenString('& w KQkq - 0 1') }).toThrow();
});

test("validate.fenString() | valid fen string", () => {
    expect(() => { validate.fenString('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1') }).not.toThrow();
});

test("validate.moveSyntax() | common move", () => {
    expect(() => { validate.moveSyntax('a2a4') }).not.toThrow();
});

test("validate.moveSyntax() | promotion move", () => {
    expect(() => { validate.moveSyntax('a7a8q') }).not.toThrow();
});

test("validate.moveSyntax() | castling move", () => {
    expect(() => { validate.moveSyntax('e1g1') }).not.toThrow();
});

test("validate.moveSyntax() | invalid move", () => {
    expect(() => { validate.moveSyntax('&3a4') }).toThrow();
});