import React, {Component} from 'react';
export default class App extends Component {
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
]				<div style={{position:'relative',overflow:'auto',minHeight:'1000px'}}>
					<div style={{paddingLeft:'150px',}}>
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}

}
