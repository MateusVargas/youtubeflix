import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

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
  <React.StrictMode>
   <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
