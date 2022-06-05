import BitBoard from '../../BitBoard/BitBoard';
import { EMPTY_BOARD_RAY_ATTACKS } from './emptyBoardRayAttacks';

type IPositiveDirection = 'no' | 'noEa' | 'noWe' | 'ea';
type INegativeDirection = 'so' | 'soEa' | 'soWe' | 'we';

/**
 * Gets the reachable squares from a square in a positive direction
 * @param occupiedBoard a Bitboard representing all the pieces on the board
 * @param direction a string representing a positive direction
 * @param position the index of a position
 * @returns a Bitboard representing the reachable squares from a square in a positive direction
 */
export function getPositiveRayAttacks(
  occupiedBoard: BitBoard,
  direction: IPositiveDirection,
  position: number
): BitBoard {
  // @TODO: add tests
  let attacks = EMPTY_BOARD_RAY_ATTACKS[position][direction];
  // Intersect the attacks and all the pieces to find the blockers
  const blockers = attacks.and(occupiedBoard);
  // If there are blockers find the closest one and return the moves from the square to this blocker
  if (!blockers.isZero()) {
    position = blockers.bitScanForward();
    attacks = attacks.xor(EMPTY_BOARD_RAY_ATTACKS[position][direction]);
  }
  return attacks;
}

/**
 * Gets the reachable squares from a square in a negative direction
 * @param occupiedBoard a Bitboard representing all the pieces on the board
 * @param direction a string representing a negative direction
 * @param position the index of a position
 * @returns a Bitboard representing the reachable squares from a square in a negative direction
 */
export function getNegativeRayAttacks(
  occupiedBoard: BitBoard,
  direction: INegativeDirection,
  position: number
): BitBoard {
  // @TODO: add tests
  let attacks = EMPTY_BOARD_RAY_ATTACKS[position][direction];
  // Intersect the attacks and all the pieces to find the blockers
  const blockers = attacks.and(occupiedBoard);
  // If there are blockers find the closest one and return the moves from the square to this blocker
  if (!blockers.isZero()) {
    position = blockers.bitScanReverse();
    attacks = attacks.xor(EMPTY_BOARD_RAY_ATTACKS[position][direction]);
  }

  return attacks;
}
