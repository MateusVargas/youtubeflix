import React,{useState} from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

const CadastroCategoria = () => {

    const [categoria, setCategoria] = useState([])

    const initialValues = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [values, setValues] = useState(initialValues)
    
    const setValue = (key,value) => {
        setValues({
            ...values,
            [key]: value
        })
    }

    const handleChange = (e) => {
        setValue(e.target.getAttribute('name'),e.target.value)
    }

    return(
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome}</h1>
            <form onSubmit={function handleSubmit(e){
                e.preventDefault()
                setCategoria([
                    ...categoria,
                    values
                ])

                setValues(initialValues)
            }}>

                <FormField
                label="Nome da Categoria"
                type="text"
                name="nome"
                value={values.nome}
                onChange={handleChange}
                />

                <FormField
                label="Descrição"
                type="textarea"
                name="descricao"
                value={values.descricao}
                onChange={handleChange}
                />
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

                <FormField
                label="Cor"
                type="color"
                name="cor"
                value={values.cor}
                onChange={handleChange}
                />

                <button>
                Cadastrar
                </button>
            </form>

            <ul>
                {categoria.map((cat,index)=>{
                    return(
                        <li key={`${cat}${index}`}>{cat.nome}</li>
                    )
                })}
            </ul>

            <Link to='/'>
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria