import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import { browserHistory } from 'react-router'

import HomeController from '../controllers/HomeController';

export default class MainRouter extends Component{

	render(){
		return(
			<Router history={browserHistory}>
				<Route path="/" component={HomeController}></Route>
			</Router>
		);
	}
}
