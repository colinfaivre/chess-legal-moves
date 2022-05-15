import validate from "../../../src/helpers/validate";

test("validate.fenStringSyntax() | invalid fen string", () => {
    expect(() => { validate.fenStringSyntax('& w KQkq - 0 1') }).toThrow();
});

test("validate.fenStringSyntax() | valid fen string", () => {
    expect(() => { validate.fenStringSyntax('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1') }).not.toThrow();
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