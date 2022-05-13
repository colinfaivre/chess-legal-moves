import createNewGameState from './game/createNewGameState/createNewGameState';
import { createNewGameScan } from './game/createNewGameScan';
import validate from './helpers/validate';
import { fenToState, stateToFen } from './helpers/fen';
import { IGameState, IScan } from './types';

export default class Game {
    private state: IGameState = {
        fenBoard: "",
        hasToPlay: "",
        availableCastlings: "",
        enPassantTarget: "",
        halfMoveClock: 0,
        fullMoveClock: 0,
    }

    public fen: string;
    public scan: IScan = {
        legalMoves: [],
        kingState: {
            isChecked: false,
            isCheckMated: false,
            isDraw: false,
        },
    }

    constructor(fenString: string) {
        validate.fenStringSyntax(fenString);
        this.updateFen(fenString);
        this.updateState(fenToState(fenString));
        this.updateScan(this.state.fenBoard);
    }

    private updateFen(newFen: string): void {
        this.fen = newFen;
    }

    private updateState(newState: IGameState): void {
        this.state = newState;
    }
    
    private updateScan(fenBoard: string): void {
        this.scan = createNewGameScan(fenBoard);
    }
    
    public addMove(move: string): string {
        // @TODO add lots of edge cases tests for this method
        validate.moveSyntax(move);
        this.checkIfLegalMove(move);
        this.updateState(createNewGameState(move, this.state));
        this.updateFen(stateToFen(this.state))
        
        return this.fen;
    }

    private checkIfLegalMove(move: string): void {
        // @TODO if the move is not legal : throw new Error('The provided move is not legal')
        // @TODO ILegalMoves may not have the easier to consume data structure
        //       it could be easier with a map instead of array
        //       investigate how it is used on the frontend and in this method.
    }
}
