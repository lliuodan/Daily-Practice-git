// 1、toLowerCase(): 把字符串转为小写，返回新的字符串。
var str="Hello World";
var str1=str.toLowerCase();
console.log(str); //Hello World
console.log(str1); //hello world

// 2、toUpperCase(): 把字符串转为大写，返回新的字符串。
var str="hello world";
var str1=str.toUpperCase();
console.log(str); //hello world
console.log(str1); //HELLO WORLD

// 3、charAt(): 返回指定下标位置的字符。如果index不在0-str.length(不包含str.length)之间，返回空字符串。
var str="hello world";
var str1=str.charAt(6);
console.log(str1);// "w"

// 4、charCodeAt(): 返回指定下标位置的字符的unicode编码,这个返回值是 0 - 65535 之间的整数。
var str="hello world";
var str1=str.charCodeAt(1);//“e”----> 101
var str2=str.charCodeAt(-2); //NaN
console.log(str1); //101
// 注意：如果index不在0-str.length(不包含str.length)之间，返回NaN。

// 5、indexOf(): 返回某个指定的子字符串在字符串中第一次出现的位置

var str="Hello World";
var str1=str.indexOf("o");
var str2=str.indexOf("world");
var str3=str.indexOf("o",str1+1);
console.log(str1); //4 默认只找第一个关键字位置，从下标0开始查找
console.log(str2); //-1 没有找到
console.log(str3); //7
// 注意：indexOf()方法对大小写敏感，如果子字符串没有找到，返回-1。第二个参数表示从哪个下标开始查找，没有写则默认从下标0开始查找。

// 6、lastIndexOf(): 返回某个指定的子字符串在字符串中最后出现的位置。
var str="Hello World";
var str1=str.lastIndexOf("o");
var str2=str.lastIndexOf("world");
var str3=str.lastIndexOf("o",str1-1);
console.log(str1); //7
console.log(str2); //-1
console.log(str3); //4
// 注意：lastIndexOf()方法对大小写敏感，如果子字符串没有找到，返回-1。第二个参数表示从哪个下标开始查找，没有写则默认从最后一个字符处开始查找。

// 7、slice(): 返回字符串中提取的子字符串。
var str="Hello World";
var str1=str.slice(2); //如果只有一个参数，则提取开始下标到结尾处的所有字符串
var str2=str.slice(2,7); //两个参数，提取下标为2，到下标为7但不包含下标为7的字符串
var str3=str.slice(-7,-2); //如果是负数，-1为字符串的最后一个字符。提取从下标-7开始到下标-2但不包含下标-2的字符串。前一个数要小于后一个数，否则返回空字符串
console.log(str1); //llo World
console.log(str2); //llo W
console.log(str3); //o Wor

// 8、substring(): 提取字符串中介于两个指定下标之间的字符。
var str="Hello World";
var str1=str.substring(2);
var str2=str.substring(2,2);
var str3=str.substring(2,7);//不包括后面那一个
console.log(str1); //llo World
console.log(str2); //如果两个参数相等，返回长度为0的空串
console.log(str3); //llo W
// 注意：substring()用法与slice()一样，但不接受负值的参数。

// 9、substr(): 返回从指定下标开始指定长度的的子字符串
var str="Hello World";
var str1=str.substr(1);
var str2=str.substr(1,3);
var str3=str.substr(-3,2);
console.log(str1); //ello World
console.log(str2); //ell
console.log(str3); //rl
// 注意：如果没有指定length,返回从下标开始处结尾处的所有字符串。

// 10、split(): 把字符串分割成字符串数组。
var str="AA BB CC DD";
var string1="1:2:3:4:5";
var str1=str.split("");//如果把空字符串 ("")用作分割符，那么字符串的每个字符之间都会被分割
var str2=str.split(" "); //以空格为分隔符
var str3=str.split("",4); //4指定返回数组的最大长度
var str4=string1.split(":");
console.log(str1); // ["A", "A", " ", "B", "B", " ", "C", "C", " ", "D", "D"]
console.log(str2); //["AA" "BB" "CC" "DD"]
console.log(str3); //["A", "A", " ", "B"]
console.log(str4); // ["1", "2", "3", "4", "5"]

// 11、replace(): 在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
var str="hello WORLD";
var reg=/o/ig; //o为要替换的关键字，不能加引号，否则替换不生效，i忽略大小写，g表示全局查找。
var str1=str.replace(reg,"**");
var str2=str.replace("o","哈哈");//"hell哈哈 world"   只替换了一个o
console.log(str1); //hell** W**RLD

// 12、match(): 返回所有查找的关键字内容的数组。
var str="To be or not to be";
var reg=/to/ig;
var str1=str.match(reg);
console.log(str1); //["To", "to"]
console.log(str.match("Hello")); //null

/*ES6新增字符串方法*/
// 注：如果只是需要判断某字符串中是否包含子字符串，那么推荐使用ES6 新增的方法；如果需要找到在字符串中的位置，那么就使用 indexOf() 方法。
// 1.字符串的子串识别
// includes(str, index): 返回布尔值，表示是否找到了参数字符串
var a = 'abcdef';
console.log(a.includes('cd'));  //true
console.log(a.includes('ab', 1));   //false  (从第1个位置开始找)
console.log(a.includes('ab', 0));   //true

// starsWith(str, index): 返回布尔值，表示参数字符串是否在原字符串的头部
var a = 'abcadef';
console.log(a.startsWith('ab'));    //true
console.log(a.startsWith('ab', 2)); //false
console.log(a.startsWith('ab', 0)); //true

// endsWith(str, index): 返回布尔值，表示参数字符串是否在原字符串的尾部（第二个参数代表前几个字符数）
var  a = 'abcdef';
console.log(a.endsWith('ef'));    //true
console.log(a.endsWith('bc', 3)); //true (前3个字符, bc是否在尾部)
console.log(a.endsWith('cd',4)); //true (前4个字符, )

// 2. repeat() 接收一个Number类型的数据,将原来的字符串重复n次得到一个新的字符串,原来的不变
console.log('ab'.repeat(3)); //ababab
console.log('abc'.repeat(2.8)); //'abcabc'   小数向下取整
console.log('abc'.repeat(-1)); //负数/infinity 报错的    Invalid count value
console.log('abc'.repeat('2'));//"abcabc"    将字符串作为数字
console.log('abc'.repeat()); //""（空字符串）
console.log('abc'.repeat(0)); //""（空字符串）
console.log('abc'.repeat(-0.3));//"" (空字符串)   0---->-1之间   结果为0
console.log('abc'.repeat(NaN));//"" (空字符串)   0---->-1之间   结果为0

// 3. padStart(), padEnd()
// 如果某个字符串不够指定长度，会在头部或尾部补全。padStart() 用于头部补全，padEnd() 用于尾部补全。
// 它们一共接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。
console.log('a'.padStart(5,'XX')); //XXXXa
console.log('a'.padEnd(5,'XX')); //aXXXX
console.log('aaaa'.padStart(5,'XX')); //Xaaaa     如果用来补全的字符与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串
console.log('a'.padStart(5)); //'    a'   省略第二个参数，默认使用空格补全长度
console.log('aaaaa6'.padStart(5,'XX'));// 'aaaaa6'如果原字符的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。

// 4.字符串模板
// 字符串模板最简单的语法，是使用反引号（``）来包裹普通字符串,${}实现一个变量

var  a = 'hello';
console.log(a+', zhangsan');    //以前，我们这样做
console.log(`${a}, zhangsan`);  //现在，我们这样做

//ES6 保留换行和空格
let s1=`hahahha
    hertvmrgiur
nfrihr
   `;

//\`转义
console.log(`ssss\`3456`);//ssss`3456

//{可以运算}
let x=1;
let y=2;
console.log(`${x}+${y}=${x+y}`);//1+2=3

//调用函数（带参）
function fn(x){
    return x;
}
let s2='hhhh';
console.log(`函数fn输出的结果是${fn(s2)}`);//"函数fn输出的结果是hhhh"

let s3='return'+'`hello ${wd}`';
let fun=new Function("wd",s3);
console.log(fun('world'));//hello world



