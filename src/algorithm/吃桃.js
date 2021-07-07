
/**
 * 公园里有一堆桃子，猴子每天吃掉一半，挑出一个坏的扔掉，第6天的时候发现还剩1个桃子，问原来有多少个桃子？
 * @param {Number} day 哪一天
 * @return {Number} 返回那天的桃子数
 */
function countPeach(day){
    if(day==6){
        return 1;
    }else{
        return (countPeach(day+1)+1)*2
    }
}

console.log(countPeach(1));
