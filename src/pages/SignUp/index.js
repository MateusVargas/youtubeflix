import React, { useEffect, useState, useContext } from 'react';
import {useHistory} from 'react-router-dom'
import PageDefaultToLogin from '../../components/PageDefaultToLogin';
import LoaderButton from '../../components/LoaderButton'
import FormField from '../../components/FormField';
import useForm from '../../hooks/useForm';

import AuthContext from '../../contexts/auth'

import api from '../../config'

function SignUp() {

  const [loading,setLoading] = useState(false)

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
	setLoading(true)
  	try{
	  	event.preventDefault()
	  	const response = await api.post('user/create',values)
	  	if(response.status === 201){
	  		history.push('/login')
		}
		setLoading(false)  
  	}catch(error){
		console.log(error)
		setLoading(false)
  	}
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
				{loading && <div className="ml-4" style={{fontSize:'1rem'}}><LoaderButton/></div>}
	          </button>
	        </div>

      	</form>

    </PageDefaultToLogin>
  );
}

export default SignUp;
