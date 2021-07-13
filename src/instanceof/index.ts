export const myInstanceof = (left: object, right: object) => {
  // @ts-ignore
  let prototype = right.prototype;
  // @ts-ignore
  let _left = left.__proto__;
  while (true) {
    if (_left === null) {
      return false;
    } else if (_left === prototype) {
      return true;
    } else {
      _left = _left.__proto__;
    }
  }
};
