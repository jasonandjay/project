import React, { Component } from 'react'

export default class Index extends Component {
    render() {
        // generator函数
        function * gene(){
            let val1 = yield 1+1;
            yield val1;
            yield 3;
            return 4;
        }

        //第一次调用generator函数返回一个迭代器
        let g = gene();
        console.log('执行结果...', g.next());   // {value:1,done:false}
        // 下一次调用next方法传入的参数，会当作上一次调用yield表达式的返回值 
        console.log('执行结果...', g.next(1000));   // {value:1,done:false}
        console.log('执行结果...', g.next());   // {value:1,done:false}
        console.log('执行结果...', g.next());   // {value:1,done:false}

        // 怎么在generator中像async那样把值传到等式左边
        function * getData(){
            let data = yield fetchData();
            console.log('data...', data);
            return 1;
        }
        // 生成迭代器
        g = getData();
        console.log('getData执行结果...', g.next());
        // g.next();
        // 获取数据
        function fetchData(){
            return fetch('/index.json')
            .then(res=>res.json())
            .then(body=>{
                console.log('getData执行结果...',  g.next(body));
                // return body;
                return Promise.resolve(body);
            })
        }

        // async的写法
        async function getDataAsync(){
            let data = await fetchData();
            console.log('async data...', data);
        }
        getDataAsync();
        

        return (
            <div>
                
            </div>
        )
    }
}
