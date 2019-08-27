/**
 * 解析queryString
 */

// 方法一：
function parseQuery(url) {
    let params = url.split('?')[1];
    let obj = {};
    if (params) {
        let ary = params.split('&');
        ary.forEach((item, index) => {
            let key = item.split('=')[0];
            let val = item.split('=')[1];
            obj[key] = val;
        });
    } else {
        obj = {};
    }
    return obj;
}

console.log(parseQuery('http://www.baidu.com?a=1&b=2&c=3'));
// console.log(parseQuery('http://www.baidu.com'));
// { a: '1', b: '2', c: '3' };

// 方法二：
function getQueryObject(url) {//将url的参数解析成一个对象
    url = url == null ? window.location.href : url;
    var search = url.substring(url.lastIndexOf("?") + 1);
    // console.log(search);
    var obj = {};
    var reg = /([^?&=]+)=([^?&=]*)/g;
    search.replace(reg, function (rs, $1, $2) {
        var name = decodeURIComponent($1);
        var val = decodeURIComponent($2);
        val = String(val);
        obj[name] = val;
        return rs;
    });
    return obj;
}

console.log(getQueryObject('http://www.baidu.com?a=1&b=2&c=3'));

//方法三：
function parseQueryLeader(url) {
    const index = url.indexOf('?');
    const ret = {};
    if (index === -1 || index === url.length - 1) {
        return ret
    }
    const search = url.substring(index + 1);
    search.split('&').forEach(s => {
        const arr = s.split('=');
        ret[arr[0]] = arr[1] || '';
    });
    return ret;
}

console.log(parseQueryLeader('http://www.baidu.com?a=1&b=2&c=3'));
