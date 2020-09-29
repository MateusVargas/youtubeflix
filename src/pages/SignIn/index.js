import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PageDefaultToLogin from '../../components/PageDefaultToLogin';
import LoaderButton from '../../components/LoaderButton'
import FormField from '../../components/FormField';
import useForm from '../../hooks/useForm';

import AuthContext from '../../contexts/auth'

import api from '../../config'

function SignIn() {

  const {signIn} = useContext(AuthContext)

  const [loading, setLoading] = useState(false)

  const valoresIniciais = {
    email: '',
    password: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  useEffect(() => {
    
  }, []);

  function handleSignIn(event){
    event.preventDefault()
    setLoading(true)
    signIn(values)
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
              {loading && <div className="ml-4" style={{fontSize:'1rem'}}><LoaderButton/></div>}
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
