import {
    generateRayAttacks,
} from "../../../../src/createNewGameScan/moves/slidingAttacks";

test("generateRayAttacks()", () => {
    const received = generateRayAttacks()[15];
    received.no.print();
    received.so.print();
    received.ea.print();
    received.we.print();
    received.noEa.print();
    received.soWe.print();
    const expected = [];

    expect(received).toStrictEqual(expected);
});
