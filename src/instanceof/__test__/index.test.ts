import { myInstanceof } from '../index';

let num = new Number(1);

test('测试手写instanceof：', () => {
  expect(myInstanceof(num, Number)).toBe(true);
});
