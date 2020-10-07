import baseDifference from "./.internal/baseDifference.js";
import baseFlatten from "./.internal/baseFlatten.js";
import isArrayLikeObject from "./isArrayLikeObject.js";

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 * **Note:** Unlike `pullAll`, this method returns a new array.
 *
 * 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
 *（注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）
 * 该方法使用 SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see union, unionBy, unionWith, without, xor, xorBy, xorWith,
 * @example
 *
 * difference([2, 1], [2, 3])
 * // => [1]
 */
function difference(array, ...values) {
  // 1. 检查是否是有效的数组
  // 2. 将传入的参数当中后续几个数组扁平化
  // 3. 将扁平化之后的数组与最开始的第一个参数数组传入baseDifference函数得出答案
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
}

export default difference;
