import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';//js默认
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//render 1st para to where 2nd para.
//可能有多个节点，在multi程序里
registerServiceWorker();
