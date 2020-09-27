import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video'
import CadastroCategoria from './pages/Cadastro/Categoria';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
//eslint: npx eslint --init, escolher as configurações e instalar as libs, se der erro no 
//npm start: trocar a versão do eslint no package.json e dar npm install
//no VS Code instalar a extensão do eslint, ctrl+P, digitar eslint pra ativar
//depois: npm instal prop-types -> adicionando tipagem
//ex: Form.propTypes = {label: PropTypes.string.isRequired}

//JSON Server: npm install json-server
//executar: criar script no package.json -> "server": "json-server --watch db.json"

//HEROKU usa sempre o comando npm start para startar o servidor
//VERCEL usa o npm build para iniciar


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/login'><SignIn/></Route>
      <Route path='/sign-up'><SignUp/></Route>

      <Route path='/' exact><Home/></Route>
      <Route path='/cadastro/video'><CadastroVideo/></Route>
      <Route path='/cadastro/categoria'><CadastroCategoria/></Route>
      
      <Route><h1>Not found</h1></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
