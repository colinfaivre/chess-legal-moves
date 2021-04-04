This lib implements a function that takes a string representing a snapshot of a chess game in FEN notation.
It returns an array of move objects containing a UCI notation string representing a legal move the player can play and other useful infos (if the move is a kill, en passant or checks the opponent).

example input :
Here's the FEN for the starting position :
'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

example output :
[
    {
        uciMove: string,
        kill: boolean,
        check: boolean,
        enPassant: boolean,
    },
]

example uciMoves :
['a2a3', 'a2a4', 'b1a2', 'b1a4', ...]
