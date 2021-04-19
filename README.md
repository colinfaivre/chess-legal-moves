# ♔ Chess legal moves

This lib implements a function that takes a string representing a snapshot of a chess game in [FEN notation](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation).
It returns an array of move objects containing a [UCI notation](https://en.wikipedia.org/wiki/Universal_Chess_Interface) string representing a legal move the player can play and other useful infos (if the move is a kill, en passant or checks the opponent).

## Installation
with npm
```
npm install chess-legal-moves
```
with yarn
```
yarn add chess-legal-moves
```

## Usage
```js
import { getLegalMoves } from 'chess-legal-moves';
// Pass a FEN string to the function (this FEN string represents a game starting position)
const moves = getLegalMoves('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
```

example output :
```js
[
    {
        uciMove: string,
        kill: boolean,
        check: boolean,
        enPassant: boolean,
    },
]
```

example uciMoves :
```js
['a2a3', 'a2a4', 'b1a2', 'b1a4', ...]
```
