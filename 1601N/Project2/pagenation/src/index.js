import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index';
import withPagenation from './components/hoc/withPagenation';

let NewComponent = withPagenation(Index);
ReactDOM.render(<NewComponent total={500} pageSize={20}/>, document.getElementById('root'));
