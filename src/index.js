import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact><Home/></Route>
      <Route path='/cadastro/video'><CadastroVideo/></Route>
      <Route path='/cadastro/categoria'><CadastroCategoria/></Route>
      <Route><h1>Not found</h1></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
