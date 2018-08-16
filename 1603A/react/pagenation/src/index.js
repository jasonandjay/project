import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index';
import withPagenation from './hoc/withPagenation';


let Component = withPagenation(Index);
ReactDOM.render(<Component />, document.getElementById('root'));
