import React,{useContext} from 'react';

import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';

import AuthContext from '../contexts/auth'

const Routes = () => {
	const {signed} = useContext(AuthContext)
	return signed ? <AppRoutes/> : <AuthRoutes/>
}

export default Routes