/**
 * @desc 假设一个数最小，通过遍历的到真正的最小值，然后假设的和真正的交换位置
 * @param {Array<Number>} arr 
 * 
 */
function selectSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var min = arr[i];
    var minIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        min = arr[j];
        minIndex = j;
      }
    }
    var tmp = arr[i];
    arr[i] = min;
    arr[minIndex] = tmp;
  }
  return arr;
}


console.log(selectSort([9,5,214,54,474,231,45]));
