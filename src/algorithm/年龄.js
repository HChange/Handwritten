/**
 * 老王有四个子女，老四比老三小2岁，老三比老二小2岁，老二比老大小2岁，老大现在16岁，问老四几岁？
 * @param {Number} who 老几
 * @return {Number} 年龄
 */
function countAge(who) {
  if (who == 1) {
    return 16;
  } else {
    countAge(who-1)-2;
  }
}

console.log(countAge(4));
