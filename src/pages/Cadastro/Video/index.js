import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

import api from '../../../config'

function CadastroVideo() {
  const history = useHistory();

  const [categorias, setCategorias] = useState([]);
  
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  
  const { handleChange, values } = useForm({
    titulo: '',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: '0',
  });

  useEffect(() => {
    async function getCategorias(){
      try{
        const response = await api.get('categorias')
        setCategorias(response.data)
      }catch(error){
        console.log(error)
      }
    }
    getCategorias()
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault()
    try{
      if(values.categoria === '0'){
        return alert('Selecione uma Categoria.')
      }
      const response = await api.post('videos',values)
      if (response.status === 201) {
        history.push('/')
      }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <select
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        >
          <option value="0">Selecione uma Categoria</option>

          {categorias.map(categoria=>(
            <option key={categoria.id} value={categoria
              .id}>{categoria.titulo}</option>
          ))}
        </select>

        <div className="submit">
          <button type="submit" style={{background:'var(--primary)'}}>
            Cadastrar
          </button>
        </div>

      </form>

      <br />
      <br />

    </PageDefault>
  );
}

export default CadastroVideo;