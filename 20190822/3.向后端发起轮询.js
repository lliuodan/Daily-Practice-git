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
            resolve(rand > 0.9);
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
