import dva from 'dva';
import './index.css';
import './common.css';
import {createSocket} from './services/example';


// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/index').default);
app.model(require('./models/login').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

console.log(app._store);
// 建立scoket连接
createSocket(app._store.dispatch);
