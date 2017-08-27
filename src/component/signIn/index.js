/**
 * Created by mac on 17/2/28.
 */
import React, {Component} from "react";
import {browserHistory} from 'react-router'
import './index.scss'

import Request from '../../helpers/api/Request'
export default class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = ({
			account: '',
			password: '',
		})
	}


	componentDidMount() {


	}


	componentWillUnmount() {
	}


	loginHandle = () => {
		Request.post('/login',{
			account: this.state.account,
			password: this.state.password,
		}).then((res) => {
			window.userInfo =  res.data;
			window.token = res.data.token;
			browserHistory.push('/sendPost');
		})

	};

	render() {
		return (
			<div className="signIn-contain">
				<div className="signIn-text">请登录</div>
				<input placeholder="账号" onChange={(event)=> {
					this.setState({account: event.target.value})
				}}/>
				<input placeholder='密码' type='password' onChange={(event)=> {
					this.setState({password: event.target.value})
				}}/>
				<button type="primary" size="large" onClick={this.loginHandle}>登录</button>
			</div>

		)
	}

}
