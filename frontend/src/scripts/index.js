import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'bluebird';

import MainRouter from './routers/MainRouter';

window.Promise = Promise;

document.addEventListener('DOMContentLoaded', (argument) => {
	ReactDOM.render(<MainRouter/>, document.querySelector('.app'));
});
