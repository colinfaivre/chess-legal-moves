import BitBoard from '../BitBoard/BitBoard';

export function slideUp(attacks: BitBoard): BitBoard {
  attacks = attacks.shiftLeft(8);

  return attacks;
}

export function slideDown(attacks: BitBoard): BitBoard {
  attacks = attacks.shiftRight(8);

  return attacks;
}

export function removeHighestBit(attacks: BitBoard): BitBoard {
  attacks = attacks.clearBit(attacks.bitScanReverse());

  return attacks;
}

export function removeLowestBit(attacks: BitBoard): BitBoard {
  attacks = attacks.clearBit(attacks.bitScanForward());

  return attacks;
}
