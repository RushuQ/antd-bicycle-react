import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import ERouter from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ERouter />, document.getElementById('root'));
registerServiceWorker();
