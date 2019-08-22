/**
 * 随机打乱数组顺序
 */
// sort()方法能改变原数组
function shuffle(array) {
    array.sort((a, b) => {
        return (0.5 - Math.random());
        // return b-a;// a-b  从小到大   b-a  从大到小
    });
    return array;
}

console.log(shuffle([1, 2, 3, 4, 5, 6])); // [3, 6, 2, 5, 4, 1]


function shuffleLeader(arr) {
    let len = arr.length;
    while (len > 0) {
        const rand = Math.floor(Math.random() * len);
        // 与最后一个交换
        const tmp = arr[rand];
        arr[rand] = arr[len - 1];
        arr[len - 1] = tmp;
        len--;
    }
    return arr;
}

console.log(shuffleLeader(['bb', 'android', 'ios', 78, 90, 8]));
// console.log(shuffleLeader([1, 2, 3, 4, 5, 6]));
