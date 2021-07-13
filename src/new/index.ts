/**
 * @description new的实现
 */

export const myNew = (constructor: (...rest: any) => any, ...rest: any) => {
  // 创建一个空对象
  // @ts-ignore
  const obj: Object & { __proto__: any } = {};

  // 将构造函数链接到obj上
  /* eslint-disable no-proto */
  obj.__proto__ = constructor.prototype;

  // 绑定this,执行构造函数
  let result = constructor.apply(obj, rest);

  return typeof result === 'object' ? result : obj;
};
