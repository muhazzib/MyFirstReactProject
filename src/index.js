import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './route';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Nav />, document.getElementById('root'));
registerServiceWorker();
