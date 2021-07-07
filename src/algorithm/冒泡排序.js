/**
 * @desc 遍历两两比较大的与小的交换位置
 * @param {Array<Number>} arr 
 */
function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([9, 5, 214, 54, 474, 231, 45]));

