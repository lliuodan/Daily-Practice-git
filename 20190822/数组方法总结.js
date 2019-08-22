/*
ES5里面新增一些东西

循环:
    1. for
    for(let i=0; i<arr.length; i++)
        2. while

    arr.forEach()  //  代替普通for
    arr.forEach(function(val, index, arr){
        console.log(val, index, arr);
    });
arr.map()  //  非常有用，做数据交互  "映射"
正常情况下，需要配合return，返回是一个新的数组
若是没有return，相当于forEach

注意：平时只要用map，一定是要有return

重新整理数据结构:
    [{title:'aaa'}]   ->  [{t:'aaaa'}]

arr.filter():  过滤，过滤一些不合格“元素”， 如果回调函数返回true，就留下来

arr.some(): 类似查找,  数组里面某一个元素符合条件，返回true
arr.every(): 数组里面所有的元素都要符合条件，才返回true

其实他们可以接收两个参数:
    arr.forEach/map...(循环回调函数, this指向谁);
------------------------------------------------------------
    arr.reduce()   //从左往右
求数组的和、阶乘

arr.reduceRight()  //从右往左
------------------------------------------------------------

    ES2017新增一个运算符:
幂
Math.pow(2,3)
2 ** 3
======================================================
for....of....：
	arr.keys()	数组下标
arr.entries()	数组某一项

for(let val of arr){
    console.log(val);
}
======================================================
扩展运算符:
    ...

let arr =[1,2,3];
let arr2 = [...arr];

let arr2 = Array.from(arr);

Array.from:
作用: 把类数组(获取一组元素、arguments...) 对象转成数组

个人观点： 具备 length这个东西，就靠谱

Array.of():  把一组值，转成数组
let arr = Array.of('apple','banana','orange');

console.log(arr);

arr.find():  查找，找出第一个符合条件的数组成员，如果没有找到，返回undefined

arr.findIndex(): 找的是位置， 没找到返回-1


arr.fill()	填充
arr.fill(填充的东西, 开始位置, 结束位置);

// 在ES2016里面新增:

    arr.indexOf()
arr.includes()
str.includes()*/
