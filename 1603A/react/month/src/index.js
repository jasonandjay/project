import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';

// 封装的类似与router-view的组件
import RouterView from './router/RouterView';
// 路由配置
import config from './router/router.config';

// 引入store
import {Provider} from 'react-redux';
import store from './store/store';

ReactDOM.render(<Provider store={store}>
    <Router>
        <RouterView routes={config.routes}></RouterView>
    </Router>
</Provider>, document.getElementById('root'));


// 获取数据
fetch('/data.json')
.then(res=>res.json())
.then(body=>{
    console.log('body...', body);
    store.dispatch({
        type: 'INIT_LIST',
        payload: body.list
    })
})