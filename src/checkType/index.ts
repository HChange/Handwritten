/**
 * @description 检测数据类型
 * @param type String Array .....
 * @param params 需要检测的数据
 * @returns Boolean
 */
export const checkType = (type: string, params: unknown) => {
  return Object.prototype.toString.call(params).slice(8, -1) === type;
};
