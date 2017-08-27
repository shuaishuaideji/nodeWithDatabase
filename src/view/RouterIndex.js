/**
 * Created by haha on 2016/10/17.
 */
/*
 *
 * */
import React, {Component} from 'react';
import {Router, Route, browserHistory, RouterContext, IndexRoute, IndexRedirect} from 'react-router';
import routers from '../routers/index'
export default class RouterIndex extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		if (this.props.type === 'server') {
			return <RouterContext {...this.props.renderProps} />
		} else {
			return <Router history={browserHistory} routes={routers()}/>
		}
	}
}
