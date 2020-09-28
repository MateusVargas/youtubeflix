import React from 'react';

import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'

import Home from '../pages/Home';
import CadastroVideo from '../pages/Cadastro/Video'
import CadastroCategoria from '../pages/Cadastro/Categoria';

const AppRoutes = () => {
	return(
		<BrowserRouter>
			<Switch>
				<Route path='/home' component={Home}/>
				<Route path='/cadastro/categoria' component={CadastroCategoria}/>
				<Route path='/cadastro/video' component={CadastroVideo}/>
				<Route><Redirect to='/home'/></Route>
			</Switch>
		</BrowserRouter>
	)
}

export default AppRoutes