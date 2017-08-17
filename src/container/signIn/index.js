/**
 * Created by mac on 17/2/28.
 */
import React, {Component} from "react";
import SignInView from '../../component/signIn'
export default class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = ({})
	}


	componentDidMount() {


	}


	componentWillUnmount() {
	}

	render() {
		return (
			<div>
				<SignInView />
			</div>
		)
	}

}
