import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import LoaderButton from '../../../components/LoaderButton'

import api from '../../../config'

const CadastroCategoria = () => {
  
  const valoresIniciais = {
    nome: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    /*const URL = window.location.hostname.includes('localhost')//se estiver localmente usa uma URL senão usa a externa
      ? 'http://localhost:8000/api/categorias'
      : 'https://devsoutinhoflix.herokuapp.com/categorias';

    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });*/

      async function getCategorias(){
        try{
          const response = await api.get('categorias')
          setCategorias([...response.data])
        }catch(error){
          console.log(error)
        }
      }
      getCategorias()

    },[])

  async function handleSubmit(event){
    event.preventDefault()
    try{
      const response = await api.post('categorias',values)
    }catch(error){
      console.log(error)
    }
  }
    
  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <div className="submit">
          <button type="submit">
            Cadastrar
          </button>
        </div>

      </form>

      <div className="suas-categorias">
         <h3>Suas Categorias</h3>
        {categorias.length === 0 && (<LoaderButton/>)}
        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.titulo}`}>
              {categoria.titulo}
            </li>
          ))}
        </ul>
      </div>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;