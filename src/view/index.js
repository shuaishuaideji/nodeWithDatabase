import React from 'react';
import ReactDOM from 'react-dom';
import '../css/globe.css'
import RouterIndex from './RouterIndex.js';
const RedBox = require('redbox-react').default;
var myconsole = (res)=> {
	console.log(res)
}  //所有打印用我这个封装过的，以后这里一改，所有的log就都没了，直接上线！
global.myconsole = myconsole;
if (module.hot) {
	module.hot.accept();
}


try {
	ReactDOM.render(
		<RouterIndex/>,
	document.getElementById('root')
)

} catch (e) {
	ReactDOM.render(
		<RedBox error={e}>
			<RouterIndex />
		</RedBox>,
		document.getElementById('root')
	);
}
