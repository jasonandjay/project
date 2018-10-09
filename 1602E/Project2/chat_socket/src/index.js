import dva from 'dva';
import './index.css';

import {createSocket} from './services/api';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// 登陆态模块
app.model(require('./models/index').default);
// 注册聊天模块
app.model(require('./models/chat').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');


createSocket();
