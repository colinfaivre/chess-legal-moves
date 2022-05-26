import { IRayAttack } from "../../../types";
import { 
    generateNorthAttacks,
    generateSouthAttacks,
    generateEastAttacks,
    generateNorthEastAttacks,
    generateWestAttacks,
    generateSouthWestAttacks,
    generateNorthWestAttacks,
    generateSouthEastAttacks,
} from "./directions";

export function generateRayAttacks(): IRayAttack[] {
    // @TODO document
    // @TODO add tests
    
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

    result = generateNorthAttacks(result);
    result = generateSouthAttacks(result);
    result = generateEastAttacks(result);
    result = generateNorthEastAttacks(result);
    result = generateWestAttacks(result);
    result = generateSouthWestAttacks(result);
    result = generateNorthWestAttacks(result);
    result = generateSouthEastAttacks(result);

    return result;
}

export const RAY_ATTACKS = generateRayAttacks();
