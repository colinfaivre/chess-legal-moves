import getLegalMoves from "../src/index";
import { legalMovesFromstartingPosition } from "./startingPosition";

test("Testing 'getLegalMoves' function", () => {
    expect(getLegalMoves('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')).toStrictEqual({
        legalMoves: legalMovesFromstartingPosition,
        gameState: {
            isChecked: false,
            isCheckMated: false,
            isDraw: false,
        }
    });
});
