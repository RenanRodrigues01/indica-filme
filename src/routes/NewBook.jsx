//import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
//import booksFetch from "../Axios/config"
import '../style/components/NewBook.sass'



const NewBook = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const createBook = (data) => {
    console.log(data)
    /*await booksFetch.post("/livros", {
      "titulo": book.titulo,
      "autor": book.autor,
      "genero": book.genero,
      "editora": book.editora
    });

    navigate('/')*/
  }
  
  return (
    <div className="new-book">
      <h2>Cadastar novo Livro</h2>

      <form onSubmit={handleSubmit(createBook)}>

            <div className="form-control">
              <label htmlFor="titulo">Titulo:</label>
              <input type="text" 
                  name="titulo" 
                  {...register("titulo")}
              />
            </div>

            <div className="form-control">
              <label htmlFor="autor">Autor:</label>
              <input type="text" 
                  name="autor" 
                  {...register("autor")}
              />
            </div>

            <div className="form-control">
              <label htmlFor="genero">Gênero:</label>
              <input type="text" 
                  name="genero" 
                  {...register("genero")}
              />
            </div>

            <div className="form-control">
              <label htmlFor="editora">Editora:</label>
              <input type="text" 
                  name="editora" 
                  {...register("editora")}
              />
            </div>

            <input type="submit" value="Cadastar livro" id='button' />
      </form>

    </div>
  )
}

export default NewBook
