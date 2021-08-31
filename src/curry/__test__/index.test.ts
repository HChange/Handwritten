import { curry } from '../index';
import { checkType } from '../../checkType/index';

const add = (a: number, b: number, c: number, d: number) => {
  return a + b + c + d;
};

describe('测试函数柯里化:', () => {
  it('测试函数柯里化1：', () => {
    expect(curry(add)(1)(2)(3)(4)).toBe(10);
    expect(curry(add)(1)(2)(3)(5)).toBe(11);
  });

  it('测试函数柯里化2：', () => {
    expect(curry(add)(1)(2)(3, 4)).toBe(10);
    expect(curry(add)(1, 2)(3, 4)).toBe(10);
  });

  it('测试函数柯里化3：', () => {
    expect(curry(add)(1, 2, 3, 4)).toBe(10);
  });
});

test('测试函数柯里化（checkType)：', () => {
  const isArray: (params: any) => boolean = curry(checkType, 'Array');
  expect(isArray([])).toBe(true);
  expect(isArray('string')).toBe(false);
});
