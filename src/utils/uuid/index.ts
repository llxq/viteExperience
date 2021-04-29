/*
 * @Description: 生成uuid，从redcat-app上复制过来的
 * @version: 1.0
 * @Author: chendf
 * @Date: 2021-04-15 17:04:08
 * @LastEditors: chendf
 * @LastEditTime: 2021-04-15 17:57:07
 */

class UUID {
    static clockSequence: number = 0
    /**
     * 生成有序 UUID
     */
    static create (): string {
      const rand: Function = UUID._cryptoPRNG
      const hex: Function = UUID._hexAligner
      const currentTimeMillis: number = Date.now()
  
      if (UUID.clockSequence < 0xFFFF) {
        UUID.clockSequence++
      } else {
        UUID.clockSequence = 0
      }
  
      return `${hex((currentTimeMillis / 0x1000) & 0xFFFFFFFF, 8)}-${hex((currentTimeMillis * 0x10) & 0xFFF0, 4)}-${hex((UUID.clockSequence & 0xFFFF), 4)}-${hex(rand(16), 4)}-${hex(rand(48), 12)}`.toUpperCase()
    }
  
    /**
       * Returns an unsigned x-bit random integer.
       * @private
       * @param {int} x Positive integer ranging from 0 to 53, inclusive.
       * @returns {int} Unsigned x-bit random integer (0 <= f(x) < 2^x).
       */
    static _cryptoPRNG (x: number): number {
      if (x < 0 || x > 53) {
        return NaN
      }
  
      let crypto: Crypto = window.crypto || window.msCrypto
      if (crypto && crypto.getRandomValues && typeof Uint32Array !== 'undefined') {
        let ns: Uint32Array = crypto.getRandomValues(new Uint32Array(x > 32 ? 2 : 1))
        return x > 32 ? ns[0] + (ns[1] >>> 64 - x) * 0x100000000 : ns[0] >>> 32 - x
      } else {
        let n: number = 0 | Math.random() * 0x40000000 // 1 << 30
        return x > 30 ? n + (0 | Math.random() * (1 << x - 30)) * 0x40000000 : n >>> 30 - x
      }
    }
  
    /**
       * Converts an integer to a zero-filled hexadecimal string.
       * @private
       * @param {int} num
       * @param {int} length
       * @returns {string}
       */
    static _hexAligner (num: number, length: number): string {
      let str: string = num.toString(16)
      let i: number = length - str.length
      let z: string = '0'
      for (; i > 0; i >>>= 1, z += z) {
        if ((i & 1) === 1) {
          str = z + str
        }
      }
      return str
    }
}

export default function () {
    return UUID.create().toString()
}
  
