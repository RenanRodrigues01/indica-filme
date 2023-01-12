import { useState, useEffect } from "react"
import booksFetch from "../Axios/config"
import Book from "../components/Book"
import '../style/components/Home.sass'


const Home = () => {
  const [books, setBooks] = useState([])

  const getBooks = async () => {
      try {
          const response = await booksFetch.get("/livros");
          const data = response.data;
          setBooks(data);

      } catch (error) {
          console.log(error);
      }
  }

  useEffect(() => {
      getBooks();
  }, [books])

  return (
    <section>
      <h1 className="title-home">Lista de Livros</h1>
        <div className="content">
          <Book books = {books} />
        </div>
    </section>
  )
}

export default Home
