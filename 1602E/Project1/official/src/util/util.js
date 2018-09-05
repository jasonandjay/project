// 去抖动， 直到事件停止的时候才会触发
export let debounce = (func, ms = 150)=>{
    // 设置一个定时器变量
    let timer = 0;
    return ()=>{
        // 清除上一次的定时器
        clearTimeout(timer);
        // 生成一个新的延迟执行的定时器
        timer = setTimeout(()=>{
            func();
        }, ms);
    }
}

// let func = debounce(()=>{
//     console.log('触发了事件1...'+(+new Date()))
// });
// console.log(func);
// let count = 0;
// let inter = setInterval(()=>{
//     func();
//     if (count > 100){
//         clearInterval(inter);
//     }
//     count++;
// }, 10);

// 节流 一定时间间隔内一定会触发一次
export let throttle = (func, ms = 5000)=>{
    // 设置一个定时器变量
    let timer = 0,
    // 设置一个开始时间
        start = +new Date();

    return ()=>{
        // 获取当前时间
        let cur = +new Date();
        // 如果下一次触发的时间距离这一次大于ms，才会触发
        if (cur - start > ms){
            clearInterval(timer);
            timer = setTimeout(()=>{
                func();
            }, ms);
            start = cur;
        }
    }
}

// let func2 = throttle(()=>{
//     console.log('触发了事件2...'+(+new Date()))
// });
// console.log(func2);
// setInterval(()=>{
//     func2();
// }, 10);
