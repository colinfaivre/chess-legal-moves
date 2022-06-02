import BitBoard from "../../BitBoard/BitBoard";
import { EMPTY_BOARD_RAY_ATTACKS } from "./emptyBoardRayAttacks";

type IPositiveDirection = 'no' | 'noEa' | 'noWe' | 'ea';
type INegativeDirection = 'so' | 'soEa' | 'soWe' | 'we';

export function getPositiveRayAttacks(
    occupiedBoard: BitBoard,
    direction: IPositiveDirection,
    position: number
): BitBoard {
    // @TODO: document
    // @TODO: add tests
    let attacks = EMPTY_BOARD_RAY_ATTACKS[position][direction];
    const blocker = attacks.and(occupiedBoard);
    if (!blocker.isZero()) {
        position = blocker.bitScanForward();
        attacks = attacks.xor(EMPTY_BOARD_RAY_ATTACKS[position][direction]);
    }

    return attacks;
}

export function getNegativeRayAttacks(
    occupiedBoard: BitBoard,
    direction: INegativeDirection,
    position: number
): BitBoard {
    // @TODO: document
    // @TODO: add tests
    let attacks = EMPTY_BOARD_RAY_ATTACKS[position][direction];
    const blocker = attacks.and(occupiedBoard);
    if (!blocker.isZero) {
        position = blocker.bitScanReverse();
        attacks = attacks.xor(EMPTY_BOARD_RAY_ATTACKS[position][direction]);
    }

    return attacks;
}