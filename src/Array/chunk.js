import slice from "../../slice.js";
import toInteger from "../../toInteger.js";

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。
 * 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process. 需要处理的数组
 * @param {number} [size=1] The length of each chunk  处理之后每个数组的长度
 * @returns {Array} Returns the new array of chunks.  返回的数组
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size = 1) {
  // 处理传入的size，确保是正整数
  size = Math.max(toInteger(size), 0);
  const length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  // 每一次取值的其实index
  let index = 0;
  // 返回结果数组的index
  let resIndex = 0;
  // 返回的数组长度，向上取整
  const result = new Array(Math.ceil(length / size));

  while (index < length) {
    // function slice(array, start, end) {} 截取array当中start到end之间的值组成新的数组返回
    result[resIndex++] = slice(array, index, (index += size));
  }
  return result;
}

export default chunk;