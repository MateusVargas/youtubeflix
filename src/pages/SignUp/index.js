import React, { useEffect, useState } from 'react';
import PageDefaultToLogin from '../../components/PageDefaultToLogin';
import LoaderButton from '../../components/LoaderButton'
import FormField from '../../components/FormField';
import useForm from '../../hooks/useForm';

import api from '../../config'

function SignUp() {

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
  	const response = await api.post('user/create',values)
  	console.log(response)
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
