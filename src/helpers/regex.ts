export default {
  fenString:
    /^\s*([prnbqkPRNBQK12345678.]{1,8}(?:\/[prnbqkPRNBQK12345678.]{1,8}){7})\s+(w|b)\s+([KQkqA-Ha-h]{1,4}|-)\s+(?:(?:([a-h][36]|-)\s+(\d{1,3})\s+(\d{1,4}))|(?:0\s+0))\s*$/,
  move: /^([a-h][1-8]){2}[rnbqRNBQ]?$/,
  promotionMove:
    /^(a7a8|b7b8|c7c8|d7d8|e7e8|f7f8|g7g8|h7h8|a2a1|b2b1|c2c1|d2d1|e2e1|f2f1|g2g1|h2h1)[rnbqRNBQ]?$/,
  castlingMove: /^(e1g1|e1c1|e8g8|e8c8)$/,
  pawnDoubleMove:
    /^(a2a4|b2b4|c2c4|d2d4|e2e4|f2f4|g2g4|h2h4|a7a5|b7b5|c7c5|d7d5|e7e5|f7f5|g7g5|h7h5)$/,
};
