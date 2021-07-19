/**
 * 节流实现
 */

export const throttle = <T = any>(fun: (...rest: Array<any>) => T, wait = 50) => {
  // eslint-disable-next-line no-undef
  let timer: NodeJS.Timeout | null = null;

  return (...rest: Array<any>) => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fun(...rest);
      }, wait);
    }
  };
};
