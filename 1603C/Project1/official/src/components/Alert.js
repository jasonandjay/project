// 存放将要弹出的弹框
const alerts = [];
// 判断是否已经有弹框
let isAlerting = false;
// 当前弹框回调事件
let callback = null;

function Alert(content='', title='', cb=()=>{}){
    callback = cb;
    // 判断是否有内容
    if (!content && !title){
        return;
    }
    // 判断已经有弹框了
    if (isAlerting){
        alerts.push({
            content,
            title,
            callback
        })
    }else{
         // 没有弹框弹出
        showAlert(content, title);
    }
}
// 弹出弹框
function showAlert(content, title){
    isAlerting = true;
    let div = document.createElement('div');
    div.className = 'alert';
    div.innerHTML = `<div>
        <h3>${content}</h3>
        <p>${title}</p>
        <button>确定</button>
    </div>`;
    let btn = div.querySelector('button');
    btn.addEventListener('click', btnClick);
    document.body.appendChild(div);

}

// 隐藏弹框
function hideAlert(){
    isAlerting = false;
    let div = document.querySelector('.alert');
    div.parentNode.removeChild(div);
}

// 响应事件
function btnClick(){
    // 隐藏弹框
    hideAlert();
    if (callback && typeof callback == 'function'){
        callback();
    }
    // 判断是否有后续alert
    if (alerts.length){
        let obj = alerts.shift();
        callback = obj.callback;
        showAlert(obj.content, obj.title);
    }
}

export default Alert;
