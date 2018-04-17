import dva from 'dva';
import {Router, Route} from 'dva/router'
import HomePage from './components/HomePage'

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/count').default);

// 4. Router
// app.router(require('./router').default);
app.router(({history}) =>
  <Router history={history}>
    <Route path="/" component={HomePage} />
  </Router>
);
// 5. Start
app.start('#root');
