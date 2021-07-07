/**
 * @desc 实现call
 */
// 方法一
// context 仅为传来的第一个参数，案例: PersonRel
Function.prototype.myCall = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  context = context || window;
  // this为调用函数，案例：this === say(...){...}
  // 为对象添加一个fn，案例：PersonRel.fn = say(...){...}
       context.fn = this;
  // arguments接收所有参数，然后进行切割的到传来的参数， 案例: 18
  const args = [...arguments].slice(1);
  // context调用fn，案例：context.fn === fnPersonRel.say(18)
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

//方法二
// context 为传来的所有参数，案例: [PersonRel,10]
Function.prototype.myCall2 = function(...context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  context = context || window;
  context[0].fn = this;
  const args = context.slice(1);
  const result = context[0].fn(...args);
  delete context[0].fn;
  return result;
};

/**
 * 测试代码
 */
/*
let Person = {
  name: "Tom",
  age: 28,
  say(age) {
    console.log(`我叫${this.name}我今年${age}`);
  }
};

let PersonRel = {
  name: "Change",
  age: 38
};
Person.say.myCall(PersonRel, 18); //我叫Change我今年18
Person.say.myCall2(PersonRel, 18); //我叫Change我今年18
*/
