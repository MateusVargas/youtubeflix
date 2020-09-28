import React, { useEffect, useState, useContext } from 'react';
import {useHistory} from 'react-router-dom'
import PageDefaultToLogin from '../../components/PageDefaultToLogin';
import LoaderButton from '../../components/LoaderButton'
import FormField from '../../components/FormField';
import useForm from '../../hooks/useForm';

import AuthContext from '../../contexts/auth'

import api from '../../config'

function SignUp() {

  const {loading} = useContext(AuthContext)

  const history = useHistory()

  const valoresIniciais = {
    email: '',
    password: '',
    passwordconfirm: ''
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  useEffect(() => {
    
  }, []);

  async function handleSignUp(event){
  	event.preventDefault()
  	loading(!loading)
  	/*try{
	  	event.preventDefault()
	  	const response = await api.post('user/create',values)
	  	if(response.status === 201){
	  		history.push('/login')
	  	}
  	}catch(error){
  		console.log(error)
  	}*/
  }

  return (
    <PageDefaultToLogin>
    	<h1>Crie sua Conta:</h1>
      	<form onSubmit={handleSignUp}>
	        <FormField
	          label="E-mail"
	          type="email"
	          name="email"
	          value={values.email}
	          onChange={handleChange}
	        />

	        <FormField
	          label="Senha"
	          type="password"
	          name="password"
	          value={values.password}
	          onChange={handleChange}
	        />

	        <FormField
	          label="Confirme a senha"
	          type="password"
	          name="passwordconfirm"
	          value={values.passwordconfirm}
	          onChange={handleChange}
	        />

	        <div className="submit">
	          <button type="submit">
	            Criar Conta
	          </button>
	        </div>

      	</form>

    </PageDefaultToLogin>
  );
}

export default SignUp;
