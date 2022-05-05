const regex = {
    fenString: /^\s*([prnbqkPRNBQK12345678]{1,8}(?:\/[prnbqkPRNBQK12345678]{1,8}){7})\s+(w|b)\s+([KQkqA-Ha-h]{1,4}|\-)\s+(?:(?:([a-h][36]|\-)\s+(\d{1,3})\s+(\d{1,4}))|(?:0\s+0))\s*$/,
    move: /^[a-h][1-8][a-h][1-8]$/
}

export default regex