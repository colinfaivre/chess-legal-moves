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
        this.updateFen(fenString);
        this.updateState(this.fenToState(fenString));
        this.updateScan(this.state.fenBoard);
    }

    private updateState(newState: IGameState): void {
        this.state = newState;
    }
    
    private updateScan(fenBoard: string): IScan {
        // @TODO make it return void
        return this.scan = createNewGameScan(fenBoard);
    }

    private updateFen(newFen: string): string {
        // @TODO make it return void
        return this.fen = newFen;
    }

    private checkIfLegalMove(move: string): void {
        // @TODO if the move is not legal : throw new Error('The provided move is not legal')
        // @TODO ILegalMoves may not have the easier to consume data structure
        //       it could be easier with a map instead of array
        //       investigate how it is used on the frontend and in this method.
    }

    private stateToFen(state: IGameState): string {
        // @TODO extract this method from Game
        return `${state.fenBoard} ${state.hasToPlay} ${state.availableCastlings} ${state.enPassantTarget} ${state.halfMoveClock} ${state.fullMoveClock}`
    }

    private fenToState(fen: string): IGameState {
        // @TODO extract this method from Game
        const fenArray = fen.split(' ');

        return {
            fenBoard: fenArray[0],
            hasToPlay: fenArray[1],
            availableCastlings: fenArray[2],
            enPassantTarget: fenArray[3],
            halfMoveClock: parseInt(fenArray[4]),
            fullMoveClock: parseInt(fenArray[5]),
        }
    }

    public addMove(move: string): string {
        // @TODO add lots of edge cases tests for this method
        validate.moveSyntax(move);
        this.checkIfLegalMove(move);
        this.updateState(createNewGameState(move, this.state));

        return this.updateFen(this.stateToFen(this.state));
    }
}
