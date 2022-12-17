import booksFetch from "../Axios/config"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Home = () => {
  const [books, setBooks] = useState([])

  const getBooks = async () => {
    try {
      const response = await booksFetch.get("/livros");

      const data = response.data;
      console.log(data)
      setBooks(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBooks();
  }, [])

  return (
    <div>
      <h1>Lista de Livros</h1>
      {books.length === 0 ? (<p>carregando...</p>) : (
        books.map((book) =>(
          <div className="books" key={book._id} >
            <h2>{book.titulo}</h2>
            <p>Editora: {book.editora}</p>
            
          </div>
        ))
      )}
    </div>
  )
}

export default Home
