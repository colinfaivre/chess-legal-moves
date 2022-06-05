function generateMSBTable(max: number): number[] {
  const res = [];
  let int;
  for (int = 1; int <= max; int++) {
    res[int] = Math.floor(Math.log2(int));
  }

  return res;
}

const mostSigBitTable = generateMSBTable(255);

function popCount32(int: number): number {
  int -= (int >>> 1) & 0x55555555;
  int = (int & 0x33333333) + ((int >>> 2) & 0x33333333);
  return (((int + (int >>> 4)) & 0xf0f0f0f) * 0x1010101) >>> 24;
}

function bitScanForward32(int: number): number {
  return popCount32((int & -int) - 1);
}

function bitScanReverse32(int: number): number {
  let res = 0;
  if (int > 0xffff) {
    int >>>= 16;
    res += 16;
  }

  if (int > 0xff) {
    int >>>= 8;
    res += 8;
  }

  return res + mostSigBitTable[int];
}

function clearLeastSigBit32(int: number): number {
  return int & (int - 1);
}

export default {
  popCount32,
  bitScanForward32,
  bitScanReverse32,
  clearLeastSigBit32,
};
