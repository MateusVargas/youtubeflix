import React from 'react';

import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthRoutes = () => {
	return(
		<BrowserRouter>
			<Switch>
				<Route path='/' exact><Redirect to='/login'/></Route>
				<Route path='/login' component={SignIn}/>
				<Route path='/sign-up' component={SignUp}/>
				<Route><Redirect to='/login'/></Route>
			</Switch>
		</BrowserRouter>
	)
}

export default AuthRoutes