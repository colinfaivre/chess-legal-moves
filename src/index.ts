import createNewGameState from './createNewGameState/createNewGameState';
import { createNewGameScan } from './createNewGameScan';
import validate from './helpers/validate';
import { fenToState, stateToFen } from './helpers/fen';
import { IGameState, IScan } from './types';

// @TODO use getters and setters ?

/**
 * The Game class
 *
 * @public
 */
export default class Game {
  // @TODO test everything in Game class
  public state: IGameState = {
    fenBoard: '',
    hasToPlay: 'w',
    availableCastlings: '',
    enPassantTarget: '',
    halfMoveClock: 0,
    fullMoveClock: 0,
  };

  public fen: string;
  public scan: IScan = {
    legalMoves: [],
    kingState: {
      isChecked: false,
      isCheckMated: false,
      isDraw: false,
    },
  };

  /**
   * The class constructor to build a Game instance
   * @param fenString - a string in FEN notation representing a particular game position
   *
   * @public
   */
  constructor(fenString: string) {
    validate.fenStringSyntax(fenString);
    this.updateFen(fenString);
    this.updateState(fenToState(fenString));
    this.updateScan();
  }

  /**
   * Updates fen property with a new string in FEN notation
   * @param newFen - a new string in FEN notation to update fen property
   *
   * @internal
   */
  private updateFen(newFen: string): void {
    this.fen = newFen;
  }

  /**
   * Updates state property with a new state
   * @param newState - a new state to update state property
   *
   * @internal
   */
  private updateState(newState: IGameState): void {
    this.state = newState;
  }

  /**
   * Updates scan property with a new scan
   *
   * @internal
   */
  private updateScan(): void {
    this.scan = createNewGameScan(this.state);
  }

  /**
   * Adds a move to the game
   * @param move - a move in long UCI notation to be added to the game
   * @returns a new string in FEN notation to represent the game after the added move
   *
   * @public
   */
  public addMove(move: string): string {
    // @TODO add lots of edge cases tests for this method
    validate.moveSyntax(move);
    this.checkIfLegalMove(move);
    this.updateState(createNewGameState(move, this.state));
    this.updateFen(stateToFen(this.state));

    return this.fen;
  }

  private checkIfLegalMove(move: string): void {
    // @TODO if the move is not legal : throw new Error('The provided move is not legal')
    // @TODO ILegalMoves may not have the easier to consume data structure
    //       it could be easier with a map instead of array
    //       investigate how it is used on the frontend and in this method.
  }
}
