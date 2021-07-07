/**
 * @desc 数组找到最中间的值，然后遍历大于中间值放在一个数组，小于中间值放入一个数组，然后递归
 * @param {Array<Number>} arr 
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  var midIndex = parseInt(arr.length / 2);
  var mid = arr[midIndex];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === mid) {
      continue;
    }
    if (arr[i] > mid) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return quickSort(left).concat([mid], quickSort(right));
}

console.log(quickSort([9, 5, 214, 54, 474, 231, 45]));