/**
*@desc: fibonacci
*@param {Number} number
*@return: result {Number} 第number个fibonacci值，计数从0开始
  fibonacci数列为：[1, 1, 2, 3, 5, 8, 13, 21, 34 …]
  getNthFibonacci(0) 返回值为1
  getNthFibonacci(4) 返回值为5
*/

function fibonacci(number) {
  if (number <= 1) {
    return 1;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

console.log(fibonacci(6));
