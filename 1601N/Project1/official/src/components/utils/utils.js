// 图片懒加载
export let lazyLoad = {
    nodes: [],
    inView(el){
        let rect = el.getBoundingClientRect();
        return (rect.left>0 && rect.top>0 && rect.top) <= window.innerHeight;
    },
    init(){
        this.nodes = Array.from(document.querySelectorAll('[data-src]'));
        this.loadImg();
    },
    loadImg(){
        this.nodes.forEach(item=>{
            if (this.inView(item)){
                let data_src = item.getAttribute('data-src');
                if (item.src != data_src){
                    item.src = data_src;
                }
            }
        })
    }
}

// 节流, 每ms时间段一定会执行一次
export let throttle = (func, ms)=>{
    let last = + new Date();
    return ()=>{
        let cur = + new Date();
        if (cur - last > ms){
            func();
            last = cur;
        }
    }
}

// 防抖动，直到时间间隔大于ms后才会执行一次
export let debounce = (func, ms)=>{
    let timer = 0;
    return ()=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func();
        }, ms);
    }
}