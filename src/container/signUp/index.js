/**
 * Created by mac on 17/5/24.
 */
/**
 * Created by mac on 17/5/22.
 */


import React, {Component, PropTypes} from 'react';
import {Input} from 'antd';
import Request from '../../helpers/api/Request'


// 导入样式
require('./index.scss');

// 容器
export default class SignUp extends Component {


	// 构造函数
	constructor(props) {
		super(props);
		this.state = ({
			account: '',
			password: '',
			nickName: '',
			phone: '',
		});
	}


	submit = () => {
		const params = {
			account: this.state.account,
			password: this.state.password,
			nickName: this.state.nickName,
			phone: this.state.phone,
		}
		Request.post('/signUp', params).then(()=> {
			alert('成功')
		})
	}

	// 渲染
	render() {
		return (
			<div>
				<div className="signup-container">
					<div className="signup-header-text">注册</div>
					<Input
						className="signup-simple-input"
						placeholder="账号"
						onChange={(e) => {
							this.setState({account: e.target.value})
						}}
					/>
					<Input
						className="signup-simple-input"
						placeholder="密码"
						onChange={(e) => {
							this.setState({password: e.target.value})
						}}
					/>
					<Input
						className="signup-simple-input"
						placeholder="昵称"
						onChange={(e) => {
							this.setState({nickName: e.target.value})
						}}
					/>
					<Input
						className="signup-simple-input"
						placeholder="手机号"
						onChange={(e) => {
							this.setState({phone: e.target.value})
						}}
					/>
					<button className="signup-submit-button" onClick={()=> {
						this.submit()
					}}>提交
					</button>
				</div>
			</div>
		);
	}
}

