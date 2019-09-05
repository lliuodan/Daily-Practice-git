//https://zhuanlan.zhihu.com/p/27682938
/**
 * 向后端发起轮询，常用在后端服务异步化的场景，如视频转码，大数据导入数据库等
 * @param {Function: Promise<Boolean>} fetchFn http请求函数
 * @param {successCallback} callback 成功回调
 * @param {number} [interval=1000] 轮询频率
 */
function polling(fetchFn, callback, interval = 1000) {
    checkFileExist();

}
// testCase
function checkFileExist() {
    return new Promise(resolve => {
        // debugger
        setTimeout(() => {
            const rand = Math.random();
            console.log(rand);
            //resolve（true/false）（里面只是个参数），resolve只要执行了，就是成功，不影响Promise的结果
            resolve(rand > 0.9);//这样写 就是一直成功，就只执行一次了
        }, 200);
    });
}
const clearPolling = polling(checkFileExist, function() {
    console.log('success');
});

// 通常需要在 切换页面或者vue destroy中调用clearPolling来销毁轮询
setTimeout(clearPolling, 4000);
/*
    0.8435151815034037
    0.7920025177144836
    0.7102290136136924
    0.2068798722727121
    stop polling
*/
/**
 0.3977970102617978
 0.06677520055182229
 0.9009850882002246
 success
 */

//解答：孙   在浏览器控制台中  source--->snippet 中可以填写代码

var stopPolling="fail";
function polling(fetchFn, callback, interval = 1000) {
    var check = function() {
        fetchFn().then((data) => {
            callback();
        }, () => {
            setTimeout(check, interval);
        })
    };
    //用setTimeout不继续调用就等于清除了
    // setInterval 就必须主动调用clearInterval 来清除 才能终止定时器执行
    var timer=setTimeout(check, 1000);
    if(stopPolling=="success"){
        clearTimeout(timer);
    }
}
// testCase
function checkFileExist() {
    return new Promise((resolve, reject) => {
        // debugger
        setTimeout(() => {
            const rand = Math.random();
            console.log(rand);
            if (rand>0.9) {
                //resolve（true/false）（里面只是个参数），resolve只要执行了，就是成功，不影响Promise的结果
                resolve();
            } else {
                reject()
            }

        }, 200);
    });
}
var clearPollings = polling(checkFileExist, function() {
    console.log('success');
    stopPolling='success'

});

// 通常需要在 切换页面或者vue destroy中调用clearPolling来销毁轮询
setTimeout(clearPollings, 4000);
