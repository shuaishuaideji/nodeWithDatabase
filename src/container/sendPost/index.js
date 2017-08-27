/**
 * Created by mac on 17/5/22.
 */


import React, {Component, PropTypes} from 'react';
import {Input} from 'antd';
import Request from '../../helpers/api/Request'



// 导入样式
require('./index.scss');

// 容器
export default class SendPost extends Component {
	// 类型声明
	static propTypes = {
		header: PropTypes.string,
	}

	// 构造函数
	constructor(props) {
		super(props);
		this.state = ({
			title: '',
			context: '',
		});
	}


	submit = () => {
		const params ={
			title: this.state.title,
			context: this.state.context,
			token: window.token,

		}
		Request.post('/post', params).then(()=>{alert('成功')})
	}

	// 渲染
	render() {
		return (
			<div>
				<div>
					<div className="sendPost-user-info-text">账号 {window.userInfo&&window.userInfo.account}</div>
					<div className="sendPost-user-info-text">手机 {window.userInfo&&window.userInfo.phone}</div>
					<div className="sendPost-user-info-text">昵称 {window.userInfo&&window.userInfo.nickName}</div>
				</div>
				<div className="sendpost-container">
					<div className="sendpost-header-text">发帖</div>
					<Input
						className="sendpost-title-input"
						placeholder="标题"
					    onChange={(e) => { this.setState({ title: e.target.value })}}
					/>
					<Input
						className="sendpost-context-input"
						type="textarea"
						placeholder="正文"
						onChange={(e) => { this.setState({ context: e.target.value })}}
					/>
					<button className="sendpost-submit-button" onClick={()=>{this.submit()}}>提交</button>
				</div>
			</div>
		);
	}
}

