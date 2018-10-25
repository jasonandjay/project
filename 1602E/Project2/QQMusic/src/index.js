import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/index').default);
// app.model(require('./models/Rank').default);
app.model(require('./models/detail').default);
app.model(require('./models/rank').default);


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
