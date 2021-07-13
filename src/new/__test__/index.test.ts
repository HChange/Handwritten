import { myNew } from '../index';

function Person(name: string, age: number) {
  this.name = name;
  this.age = age;
}

const params = ['Change', 21];
// @ts-ignore
const target = new Person(...params);

test('测试手写new：', () => {
  expect(myNew(Person, ...params)).toEqual(target);
});
