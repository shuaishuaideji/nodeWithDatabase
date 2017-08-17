/**
 * Created by mac on 17/2/28.
 */
import React, {Component} from "react";
import {hashHistory} from 'react-router'
import './index.scss'
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
		console.log('12312312332');
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
