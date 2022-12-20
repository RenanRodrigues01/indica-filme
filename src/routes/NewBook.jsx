import '../style/components/NewBook.sass'
import booksFetch from "../Axios/config"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

const NewBook = () => {
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState();
  const [autor, setAutor] = useState();
  const [genero, setGenero] = useState();
  const [editora, setEditora] = useState();

  const createBook = async (e) => {
    e.preventDefault();

    await booksFetch.post("/livros", {
      "titulo": titulo,
      "autor": autor,
      "genero": genero,
      "editora": editora
    });

    navigate('/')
  }
  
  return (
    <div className="new-book">
      <h2>Cadastar novo Livro</h2>
      <form onSubmit={(e) => createBook(e)}>
        <div className="form-control">
          <label htmlFor="titulo">Titulo:</label>
          <input type="text" 
            name="titulo" 
            id="titulo" 
            placeholder="Digite o titulo do livro"
            required
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="autor">Autor:</label>
          <input type="text" 
            name="autor" 
            id="autor" 
            placeholder="Digite o nome do autor"
            required
            onChange={(e) => setAutor(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="genero">Gênero:</label>
          <input type="text" 
            name="genero" 
            id="genero" 
            placeholder="Digite o gênero do livro"
            required
            onChange={(e) => setGenero(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="editora">Editora:</label>
          <input type="text" 
            name="editora" 
            id="editora" 
            placeholder="Digite a editora do livro"
            required
            onChange={(e) => setEditora(e.target.value)}
          />
        </div>
        <input type="submit" value="Cadastar livro" id='button' />
      </form>
      
    </div>
  )
}

export default NewBook
