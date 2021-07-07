/**
 * @desc 实现apply
 */
//方法一
Function.prototype.myApply = function (context) {
  if (typeof this != 'function') {
    return new TypeError('Error');
  }
  context = context || window;
  context.fn = this;
  const args = arguments[1];
  const result = context.fn(...args);
  delete context.fn;
  return result;
};
// 方法二
Function.prototype.myApply2 = function (...context) {
  if (typeof this != 'function') {
    return new TypeError('Error');
  }
  context = context || window;
  context[0].fn = this;
  const args = context[1];
  const result = context[0].fn(...args);
  delete context[0].fn;
  return result;
};

/**测试代码 */
/*
let Person = {
  name: "Tom",
  say(age,height) {
    console.log(`我叫${this.name}我今年${age}身高${height}`);
  }
};

let PersonRel = {
  name: "Change",
};
Person.say.myApply(PersonRel, [18,180]);
Person.say.myApply2(PersonRel, [18,180]);
*/
