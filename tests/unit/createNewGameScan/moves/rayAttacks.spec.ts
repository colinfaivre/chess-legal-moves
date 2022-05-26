import {
    generateRayAttacks,
} from "../../../../src/createNewGameScan/moves/rayAttacks/rayAttacks";

test("generateRayAttacks()", () => {
    const received = generateRayAttacks()[4];
    received.no.print();
    received.so.print();
    received.ea.print();
    received.we.print();
    received.noEa.print();
    received.soWe.print();
    received.noWe.print();
    const expected = [];

    expect(received).toStrictEqual(expected);
});
