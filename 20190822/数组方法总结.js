//网址学习参考：https://segmentfault.com/a/1190000014100810?utm_source=index-hottest#articleHeader21

/*一、传统Array对象方法*/

//修改原数组(7个)：push,pop,unshift,shift,sort,reverse,splice
//不修改原数组（3个）：concat,join,slice

// 1、 push() 向数组的末尾添加一个或更多元素，并返回新的长度。 pop() 删除并返回数组的最后一个元素
var ary = [1, 2, 3, 4, 5];
ary.push(6, 7, 8, 9, "aa");// 10  返回的是长度
console.log(ary);//[1,2,3,4,5,6,7,8,9，'aa']
ary.pop();// "aa"
console.log(ary);//[1,2,3,4,5,6,7,8,9]

// 2、unshift() 向数组的开头添加一个或更多元素，并返回新的长度。shift() 删除并返回数组的第一个元素
var ary = [1, 2, 3];
ary.unshift('首字母', 4, 5);// 6
console.log(ary);//['首字母',4,5,1,2,3]
ary.shift();//"首字母"
console.log(ary);//[4,5,1,2,3]

// 3、sort() 对数组的元素进行排序  a-b 从小到大，b-a 从大到小
var ary = [9, 4, 2, 5, 1];
ary.sort((a, b) => a - b);//[1, 2, 4, 5, 9]  从小到大
console.log(ary);//[1, 2, 4, 5, 9]
ary.sort((a, b) => b - a);//[9, 5, 4, 2, 1] 从大到小
console.log(ary);//[9, 5, 4, 2, 1]
ary.sort(() => Math.random() - 0.5);//[2, 9, 5, 4, 1]  生成随机数组

// 4、reverse() 颠倒数组中元素的顺序。
var ary = [9, 6, 1, 5];
ary.reverse();//[5,1,6,9]

// 5、splice(index,howmany,item1, ..., itemX) 删除元素，并向数组添加新元素。
// index  必须   索引
// howmany:必须  要删除的元素数量。如果设置为 0，则不会删除项目。
//item1, ..., itemX   可选。向数组添加的新项目。
var arr = new Array();
arr[0] = "George";
arr[1] = "John";
arr[2] = "Thomas";
arr.splice(2, 1);               //["Thomas"]"George", "John"
arr.splice(1, 0, "William");     //返回[]   arr="George", "William", "John"
arr.splice(2, 1, "haha");        //返回：["John"]  arr="George", "William", "haha"

// 6、concat() 连接两个或更多的数组，并返回结果。
var ary1 = [1, 2];
var ary2 = [3, 4];
var ary3 = [5, 6];
ary1.concat(ary2, ary3);//[1, 2, 3, 4, 5, 6]

// 7、join() 把数组变成一个字符串。元素通过指定的分隔符进行分隔。
var ary = [1, 2, 3];
ary.join('#');//"1#2#3"

//8、slice(start,end) 从某个已有的数组返回选定的元素,start:必须    end：可选（不包括）
var ary = [1, 2, 3];
ary.slice();//[1,2,3]    copy的功能
var arr = new Array();
arr[0] = "George";
arr[1] = "John";
arr[2] = "Thomas";
arr.slice(2, 1);//  []
arr.slice(1, 2);//"John"
arr.slice(-2, -1);//"John"


/*二、ES5数组的方法*/

//不修改原数组（9个）：
// 索引方法(2个)：indexOf()，lastIndexOf()
// 迭代方法(5个)：forEach()、map()、filter()、some()、every() 每个方法都接受两个参数，第一个参数callback（回调函数，必选），第二个参数是一个可选的上下文参数。
// 归并方法(2个)：reduce()、reduceRight() 数组的和、差、阶乘

// 1、indexOf(ele,index)  返回索引值，index表示从这个位置开始搜索，若缺省或格式不合要求，使用默认值0。
var data = [2, 5, 7, 3, 5];
data.indexOf(5, "x"); // 1 ("x"被忽略)
data.indexOf(5, "4"); // 4 (从3号位开始搜索)
data.indexOf(5, "5");//-1 没有找到

// 2、lastIndexOf(ele,index) 从字符串的末尾开始查找，而不是从开头。index的默认值是array.length - 1。
var data = [2, 5, 7, 3, 5];
data.lastIndexOf(5); // 4
data.lastIndexOf(5, 3); // 1 (从后往前，索引值小于3的开始搜索)
data.lastIndexOf(4); // -1 (未找到)

// 3、forEach 不支持return  如果这第2个可选参数不指定，则使用全局对象代替（在浏览器是为window），严格模式下甚至是undefined.
var arr = ['a', 'b', 'c', 'd'].forEach(function (item, index, array) {//声明式（不关心如何实现）
    console.log(item);//每一项元素
    console.log(index);//索引
    console.log(array);//原数组
});

// 4、map（想更新某项）  返回新数组   回调函数中返回什么这一项就是什么
var arr = [1, 2, 3].map(function (item, index, array) {
    // return 2;//[2,2,2]
    // return item*=3;//[3,6,9]
    return `<li>${item}</li>`;//``是es6中的模版字符串语法  遇到变量用${}取值
});
console.log(arr);//[ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]

// 5.filter（想删除某项） 返回结果：过滤后的新新数组 回调函数的返回结果：如果返回true   表示这一项放到新数组里
var arr = [1, 2, 3, 4, 5].filter(function (item, index, array) {
    return item < 5 && item > 2;
});
console.log(arr);//[3,4]

// 6、some() 找true  找到true后停止 返回true   找不到返回false
var flag = [1, 2, 3, 4, 5].some(function (value, index) {
    return value % 2 === 0;
});
console.log(flag);// true

// 7、every()  找false  找到false后停止  返回false
var flag = [1, 2, 3, 4, 5].every(function (value, index) {
    return value % 2 === 0;
});
console.log(flag);  // false

// 8、reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。 reduce() 对于空数组是不会执行回调函数的。
var sum = [1, 2, 3, 4].reduce(function (total, currentValue, currentIndex, array) {
    return total * currentValue;
});
console.log(sum);  // 24
var sum_1 = [1, 2, 3, 4].reduce(function (total, currentValue, currentIndex, array) {
    return total * currentValue;
}, 10);//默认指定第一次的total为10
console.log(sum_1);  // 240

// 9、reduceRight()   在于是从数组的末尾开始实现的。
var result = [2, 45, 30, 80].reduceRight(function (total, curr, index) {
    return total - curr;
});
var result_1 = [2, 45, 30, 80].reduceRight(function (total, curr, index) {
    return total - curr;
}, 200);
console.log(result);  // 3
console.log(result_1);  // 43

/*三、ES6数组的方法*/

//修改原数组（2个）：copyWithin,fill
//不修改原数组（6个）：includes,find,findIndex,entries(),keys(),values()

// 1、copyWithin(target, start = 0, end = this.length) 在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。
// target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
// start（可选,索引）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
// end（可选，索引，不包括end）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);//// 将3号位复制到0号位   [4, 2, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(0, -2, -1);// -2相当于3号位，-1相当于4号位    [4, 2, 3, 4, 5]
[1, 2, 3, 4, 5, 6, 7, 8].copyWithin(5, 2, 6);//  [1, 2, 3, 4, 5, 3, 4, 5]
[1, 2, 3, 4, 5, 6, 7, 8].copyWithin(2, 3, 5);//  [1, 2, 4, 5, 5, 6, 7, 8]
[1, 2, 3, 4, 5, 6, 7, 8].copyWithin(2, 4, 6);// [1, 2, 5, 6, 5, 6, 7, 8]

// 2、 fill(target, start = 0, end = this.length);
// target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
// start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
// end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。

['a', 'b', 'c'].fill(7);   // [7, 7, 7]
var arr = new Array(3).fill([]);
arr[0].push(5);       // [[5], [5], [5]]

// 3、find(callback,[ thisObject]);  用于找出第一个符合条件的数组成员。
[1, 4, -5, 10].find((n) => n < 0);
// -5
[1, 5, 10 ,15].find(function (value, index, arr) {
    return value > 9;
});// 10

// 4、findIndex(callback,[ thisObject])； 返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
[1, 5, 10, 15].findIndex(function(value, index, arr) {
   return value > 9;
 }); // 2

// 5、includes()  返回一个布尔值，表示某个数组是否包含给定的值。
 [1, 2, 3].includes(2);// true

// 6、entries()，keys() 和 values() 用来遍历数组。
//它们都返回一个遍历器对象，可以用for...of循环进行遍历，
// 唯一的区别是keys()是对数组的键名的遍历、values()是对数组键值的遍历，entries()方法是对数值的键值对的遍历。

for (let index of ['a', 'b'].keys()) {
    console.log(index);// 0  // 1
}

for (let elem of ['a', 'b'].values()) {
    console.log(elem);// 'a'  // 'b'
}

for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);// 0 "a" // 1 "b"
}

/*四、Array类上的方法*/
// ES5:isArray
// ES6:from(),of()

// 1 、 Array.isArray()   判断参数是否是”Array”返回true或false。
var a = [1, 2, 3];
Array.isArray(a);   //true

// 2、Array.from()
// 用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
//Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。

Array.from(arrayLike, x => x * x);
// 等同于
Array.from(arrayLike).map(x => x * x);

Array.from([1, 2, 3], (x) => x * x);
// [1, 4, 9]

// 3、Array.of() 用于将一组值，转换为数组。


Array.of(3, 11, 8);// [3,11,8]
Array.of(3); // [3]

