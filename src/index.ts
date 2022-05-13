import createNewGameState from './game/createNewGameState/createNewGameState';
import { createNewGameScan } from './game/createNewGameScan';
import validate from './helpers/validate';
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
        this.updateState(fenString);
        this.updateScan(this.state.fenBoard);
    }

    private updateState(fenString: string): void {
        this.fen = fenString;
        
        const [
            fenBoard,
            hasToPlay,
            availableCastlings,
            enPassantTarget,
            halfMoveClock,
            fullMoveClock,
        ] = fenString.split(' ');

        this.state.fenBoard = fenBoard;
        this.state.hasToPlay = hasToPlay;
        this.state.availableCastlings = availableCastlings;
        this.state.enPassantTarget = enPassantTarget;
        this.state.halfMoveClock = parseInt(halfMoveClock);
        this.state.fullMoveClock = parseInt(fullMoveClock);
    }
    
    private updateScan(fenBoard: string): IScan {
        return this.scan = createNewGameScan(fenBoard);
    }

    public addMove(move: string): string {
        // @TODO add lots of edge cases tests for this method
        validate.moveSyntax(move);
        this.checkIfLegalMove(move);
        this.state = createNewGameState(move, this.state);

        return this.updateFen();
    }

    private checkIfLegalMove(move: string): void {
        // @TODO if the move is not legal : throw new Error('The provided move is not legal')
        // @TODO ILegalMoves may not have the easier to consume data structure
        //       it could be easier with a map instead of array
        //       investigate how it is used on the frontend and in this method.
    }

    private updateFen(): string {
        return this.fen = `${this.state.fenBoard} ${this.state.hasToPlay} ${this.state.availableCastlings} ${this.state.enPassantTarget} ${this.state.halfMoveClock} ${this.state.fullMoveClock}`
    }
}
