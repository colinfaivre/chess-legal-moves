import BitBoard from "../BitBoard/BitBoard";

interface IRayAttack {
    // Positive rays
    no: BitBoard,
    ea: BitBoard,
    noEa: BitBoard,
    noWe: BitBoard,
    // Negative rays
    so: BitBoard,
    we: BitBoard,
    soWe: BitBoard,
    soEa: BitBoard
};

export function getNextEastMask(attacks: BitBoard): BitBoard {
    attacks.clearBit(attacks.bitScanForward());

    return attacks;
}

export function getNextNorthEastMask(attacks: BitBoard): BitBoard {
    attacks = attacks.shiftRight(8);
    attacks.clearBit(attacks.bitScanForward());

    return attacks;
}

export function getNextWestMask(attacks: BitBoard): BitBoard {
    attacks.clearBit(attacks.bitScanReverse());

    return attacks;
}

export function getNextSouthWestMask(attacks: BitBoard): BitBoard {
    attacks = attacks.shiftLeft(8);
    attacks.clearBit(attacks.bitScanReverse());

    return attacks;
}

export function generateRayAttacks(): IRayAttack[] {
    let result: IRayAttack[] = [];
    for (let i = 0; i < 64; i++) {
        result.push({
            no: null,
            ea: null,
            noEa: null,
            noWe: null,
            so: null,
            we: null,
            soWe: null,
            soEa: null
        })
    };

    const A2_A8 = BitBoard.fromHex('0101010101010100');
    const H7_H1 = BitBoard.fromHex('0080808080808080');
    const B1_H1 = BitBoard.fromHex('00000000000000FE');
    const G1_A1 = BitBoard.fromHex('000000000000007F');
    const B2_H8 = BitBoard.fromHex('8040201008040200');
    const G7_A1 = BitBoard.fromHex('0040201008040201');

    // North attacks
    let northAttackMask: BitBoard = A2_A8;
    for (let sq = 0; sq < 64; sq++) {
        result[sq].no = northAttackMask;
        northAttackMask = northAttackMask.shiftLeft(1);
    }

    // South attacks
    let southAttackMask: BitBoard = H7_H1;
    for (let sq = 63; sq >= 0; sq--) {
        result[sq].so = southAttackMask;
        southAttackMask = southAttackMask.shiftRight(1);
    }

    // East attacks
    let eastAttackMask: BitBoard = B1_H1;
    for (let file = 0; file < 8; file++, eastAttackMask = getNextEastMask(eastAttackMask)) {
        let east = eastAttackMask;
        for (let r8 = 0; r8 < 8*8; r8 += 8) {
            result[r8 + file].ea = east;
            east = east.shiftLeft(8);
        } 
    }

    // North-East attacks
    let northEastAttackMask: BitBoard = B2_H8;
    for (let file = 0; file < 8; file++, northEastAttackMask = getNextNorthEastMask(northEastAttackMask)) {
        let northEast = northEastAttackMask;
        for (let r8 = 0; r8 < 8*8; r8 += 8) {
            result[r8 + file].noEa = northEast;
            northEast = northEast.shiftLeft(8);
        } 
    }

    // West attacks
    let westAttackMask: BitBoard = G1_A1;
    for (let file = 7; file >= 0; file--, westAttackMask = getNextWestMask(westAttackMask)) {
        let west = westAttackMask;
        for (let r8 = 0; r8 < 8*8; r8 += 8) {
            result[r8 + file].we = west;
            west = west.shiftLeft(8);
        } 
    }

    // South-West attacks
    let southWestAttackMask: BitBoard = G7_A1;
    for (let file = 0; file < 8; file++, southWestAttackMask = getNextSouthWestMask(southWestAttackMask)) {
        let southWest = southWestAttackMask;
        for (let r8 = 63; r8 >= 8; r8 -= 8) {
            result[r8 - file].soWe = southWest;
            southWest = southWest.shiftRight(8);
        } 
    }

    return result;
}