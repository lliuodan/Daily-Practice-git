/*
对象:
    json

对象简介语法(相当有用):

let json ={
    a:1,
    b:2,
    showA:function(){
        return this.a;
    }
    showB:function(){
        return this.b;
    }
}

let json ={
    a,
    b,
    showA(){  //个人建议: 一定注意，不要用箭头函数
    },
    showB(){
    }
}


new Vuex.Store({
    state,
    mutation,
    types,
    actions
});

new Vue({
    router,
    App,
    vuex
})

Object.is():	用来比较两个值是否相等

Object.is('a','a');

比较两个东西相等:
    ==
===

Object.is(NaN, NaN);

Object.is(+0, -0);

Object.assign():   用来合并对象
let 新的对象 = Object.assign(目标对象, source1, srouce2....)

function ajax(options){  //用户传
    let defaults={
        type:'get',
        header:
        data:{}
....
};

    let json = Object.assign({}, defaults, options);
.....
}


用途:
    1. 复制一个对象
2. 合并参数

ES2017引入:
    Object.keys()
Object.entries();
Object.values();

let {keys, values, entries} = Object;let {keys, values, entries} = Object;

对象身上:   计划在ES2018引入
...

let json = {a:3, b:4};
let json2 = {...json};
*/
