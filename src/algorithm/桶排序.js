/**
 * @description 将数组的值当作另一个数组的key值，通过 for in遍历把key放入数组
 * @param {Array<Number>} arr  
 */
function bucketSort(arr){
    var bucket = [];
   for (var i = 0; i < arr.length; i++){
       bucket[arr[i]] = '占位符';
   }
   arr.length = 0;
   for(var j in bucket){
       arr.push(parseInt(j));
   }
   return arr;
}

console.log(bucketSort([9, 5, 214, 54, 474, 231, 45]));
