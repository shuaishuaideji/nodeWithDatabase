/**
 * Created by mac on 17/2/18.
 */
import SendPost from './sendPost';
import SignUp from './signUp';

import SignIn from '../container/signIn'
//是否第一次进来
let firstCome = true;
export default function getRoutes() {
	return {
		path: '/',
		indexRoute: {
			component: SignIn,
		},
		childRoutes: [
			SignUp,
			SendPost,
		],
	};

}



