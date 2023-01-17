//import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import booksFetch from "../Axios/config"
import '../style/components/NewBook.sass'

const schema = yup.object({
  titulo: yup.string().required("* Titulo obrogatório"),
  autor: yup.string().required("* Autor obrogatório"),
  genero: yup.string().required("* Genero obrogatório"),
  editora: yup.string().required("* Editora obrogatório"),
}).required();

const NewBook = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const createBook = (data) => {
    
    booksFetch.post("/livros", data);
    try {
      navigate('/')

    } catch (error) {
      console.error(error, "não deu certo")
    }

  }
  
  return (
    <section className="new-book">
      <h2>Cadastar novo Livro</h2>

      <form onSubmit={handleSubmit(createBook)}>

            <div className="form-control">
              <label htmlFor="titulo">Titulo:</label>
              <input type="text" 
                  name="titulo" 
                  {...register("titulo")}
              />
              <span>{errors.titulo?.message}</span>
            </div>

            <div className="form-control">
              <label htmlFor="autor">Autor:</label>
              <input type="text" 
                  name="autor" 
                  {...register("autor")}
              />
              <span>{errors.autor?.message}</span>
            </div>

            <div className="form-control">
              <label htmlFor="genero">Gênero:</label>
              <input type="text" 
                  name="genero" 
                  {...register("genero")}
              />
              <span>{errors.genero?.message}</span>
            </div>

            <div className="form-control">
              <label htmlFor="editora">Editora:</label>
              <input type="text" 
                  name="editora" 
                  {...register("editora")}
              />
              <span>{errors.editora?.message}</span>
            </div>

            <input type="submit" value="Cadastar livro" id='button' />
      </form>

    </section>
  )
}

export default NewBook
