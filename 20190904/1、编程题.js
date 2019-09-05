// 1、有一个大数组,var a = ['1', '2', '3', ...];a 的长度是 100,内容填充随机整数的字符串.请先构造此数组 a,然后设计一个算法将其内容去重
var ary = [];
for (var i = 0; i < 100; i++) {
    ary.push(parseInt(Math.random() * 100) + '');
}
// console.log(ary);
// console.log(ary.length);
// console.log(Array.from(new Set(ary)).length);


