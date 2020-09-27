import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefaultToLogin from '../../components/PageDefaultToLogin';
import LoaderButton from '../../components/LoaderButton'
import FormField from '../../components/FormField';
import useForm from '../../hooks/useForm';

import api from '../../config'

function SignIn() {

  const valoresIniciais = {
    email: '',
    password: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  useEffect(() => {
    
  }, []);

  async function handleSignIn(event){
    event.preventDefault()
    console.log(values)
  }

  return (
    <PageDefaultToLogin>

     <h1>Fazer login:</h1>
        <form onSubmit={handleSignIn}>
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

          <div className="submit">
            <button type="submit">
              Entrar
            </button>
          </div>

        </form>

        <div className="signup">
          Não tem uma conta?
          <Link to="/sign-up" className="ml-1">
            <strong>Cadastre-se</strong>
          </Link>
        </div>

    </PageDefaultToLogin>
  );
}

export default SignIn;
