import Int32Utils from './int32Utils';

export default class BitBoard {
  low: number;
  high: number;

  constructor(low?: number, high?: number) {
    this.low = (low || 0) >>> 0;
    this.high = (high || 0) >>> 0;
  }

  setBit(pos: number) {
    if (pos >= 32 && pos < 64) {
      this.high = (this.high | (1 << (pos - 32))) >>> 0;
    } else if (pos >= 0 && pos < 32) {
      this.low = (this.low | (1 << pos)) >>> 0;
    }
  }

  clearBit(pos: number): BitBoard {
    if (pos >= 32) {
      return new BitBoard(this.low, (this.high & ~(1 << (pos - 32))) >>> 0);
    } else {
      return new BitBoard((this.low & ~(1 << pos)) >>> 0, this.high);
    }
  }

  and(other: BitBoard) {
    return new BitBoard(this.low & other.low, this.high & other.high);
  }

  or(other: BitBoard) {
    return new BitBoard(this.low | other.low, this.high | other.high);
  }

  xor(other: BitBoard) {
    return new BitBoard(this.low ^ other.low, this.high ^ other.high);
  }

  not() {
    return new BitBoard(~this.low, ~this.high);
  }

  equals(other: BitBoard) {
    return this.low === other.low && this.high === other.high;
  }

  greaterThan(other: BitBoard) {
    return this.high > other.high || this.low > other.low;
  }

  lessThan(other: BitBoard) {
    return this.high < other.high || this.low < other.low;
  }

  isZero() {
    return this.high === 0 && this.low === 0;
  }

  extractBits() {
    let lowCopy = this.low;
    let highCopy = this.high;

    const extracted = [];

    while (lowCopy) {
      extracted.push(Int32Utils.bitScanForward32(lowCopy));
      lowCopy = Int32Utils.clearLeastSigBit32(lowCopy);
    }

    while (highCopy) {
      extracted.push(Int32Utils.bitScanForward32(highCopy) + 32);
      highCopy = Int32Utils.clearLeastSigBit32(highCopy);
    }

    return extracted;
  }

  shiftRight(numBits: number): BitBoard {
    let newLowBits, newHighBits;

    if (numBits <= 0) {
      return new BitBoard(this.low, this.high);
    } else if (numBits > 63) {
      return new BitBoard();
    } else if (numBits >= 32) {
      newLowBits = this.high >>> (numBits - 32);
      newHighBits = 0;
    } else {
      newLowBits = (this.low >>> numBits) | (this.high << (32 - numBits));
      newHighBits = this.high >>> numBits;
    }

    return new BitBoard(newLowBits, newHighBits);
  }

  shiftLeft(numBits: number): BitBoard {
    let newLowBits, newHighBits;

    if (numBits <= 0) {
      return new BitBoard(this.low, this.high);
    } else if (numBits > 63) {
      return new BitBoard();
    } else if (numBits >= 32) {
      newLowBits = 0;
      newHighBits = (this.low << (numBits - 32)) >>> 0;
    } else {
      newLowBits = (this.low << numBits) >>> 0;
      newHighBits =
        ((this.low >>> (32 - numBits)) | (this.high << numBits)) >>> 0;
    }

    return new BitBoard(newLowBits, newHighBits);
  }

  bitScanForward(): number {
    // returns the less significant bit index
    if (this.low) {
      return Int32Utils.bitScanForward32(this.low);
    } else if (this.high) {
      return Int32Utils.bitScanForward32(this.high) + 32;
    } else {
      return null;
    }
  }

  hasSetBit(pos: number): boolean {
    if (pos < 32) {
      return Boolean(this.low & (1 << pos));
    } else {
      return Boolean(this.high & (1 << (pos - 32)));
    }
  }

  bitScanReverse(): number {
    // returns the most significant bit index
    if (this.high) {
      return Int32Utils.bitScanReverse32(this.high) + 32;
    } else if (this.low) {
      return Int32Utils.bitScanReverse32(this.low);
    } else {
      return null;
    }
  }

  static fromPos(pos: number) {
    const res = new BitBoard();
    res.setBit(pos);

    return res;
  }

  static fromPositions(positions: number[]) {
    const res = new BitBoard();

    positions.forEach(pos => {
      res.setBit(pos);
    });

    return res;
  }

  static fromHex(hexNumberAsString: string) {
    const high = parseInt(`0x${hexNumberAsString.slice(0, 8)}`);
    const low = parseInt(`0x${hexNumberAsString.slice(8)}`);
    const res = new BitBoard(low, high);

    return res;
  }

  print() {
    let row = '';
    let pow = 63;
    let posVal;
    console.log('##############');
    console.log('#            #');
    while (pow >= 32) {
      posVal = (Math.pow(2, pow - 32) & this.high) === 0 ? '0' : '1';
      row = posVal + row;
      if (row.length === 8) {
        console.log('#  ' + row + '  #');
        row = '';
      }
      pow--;
    }

    while (pow >= 0) {
      posVal = (Math.pow(2, pow) & this.low) === 0 ? '0' : '1';
      row = posVal + row;
      if (row.length === 8) {
        console.log('#  ' + row + '  #');
        row = '';
      }
      pow--;
    }
    console.log('#            #');
    console.log('##############');
  }

  printBinary() {
    console.log({
      high: this.high,
      low: this.low,
    });
  }
}
