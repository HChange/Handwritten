/**
 * 防抖实现
 */

export const debounce = <T = any>(fun: (...rest: Array<any>) => T, wait = 50) => {
  // eslint-disable-next-line no-undef
  let timer: NodeJS.Timeout;

  return (...rest: Array<any>) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fun(...rest);
    }, wait);
  };
};
