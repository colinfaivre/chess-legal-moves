# ♔ Chess legal moves
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

> Analyses a given chess game position in Fen notation to return legal moves and provides the next game position after a given move

[API reference](https://colinfaivre.github.io/chess-legal-moves/)

This lib exposes a Game class, its constructor takes a string representing a snapshot of a chess game in [FEN notation](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation).
You can then use legalMoves, kingState properties and addMove() method.

legalMoves property is an array containing all legal moves in [UCI notation](https://en.wikipedia.org/wiki/Universal_Chess_Interface) 

kingState property gives you the state of the game (isCheck, isCheckmated, isDraw).

## Installation
- with npm
```shell
npm install chess-legal-moves
```
- with yarn
```shell
yarn add chess-legal-moves
```

## Usage
Import the Game class from the library and pass its constructor a FEN string.
As an example the following FEN string represents a game starting position. [Learn about FEN notation](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation)
```js
import Game from 'chess-legal-moves';
const game = new Game('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
const possibleMoves = game.legalMoves;
const kingState = game.kingState;
```

<!-- @TODO udpate documentation -->
