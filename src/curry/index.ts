export const curry = (fn: (...params: Array<any>) => any, ...initArgs: Array<any>) => {
  const loop = (...currentArgs: Array<any>) => {
    return currentArgs.length >= fn.length
      ? fn(...currentArgs)
      : (...newArgs: Array<any>) => loop(...currentArgs, ...newArgs);
  };
  return loop(...initArgs);
};
