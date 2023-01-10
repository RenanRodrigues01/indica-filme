import booksFetch from "../Axios/config"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
const UpdateBook = () => {
  const {id} = useParams()

  const [book, setBook] = useState([])

  const getBooks = async () => {
      try {
          const response = await booksFetch.get(`/livros/${id}`);

          const data = response.data;
          console.log(data)
          setBook(data);

      } catch (error) {
          console.log(error);
      }
  }

  useEffect(() => {
      getBooks();
      console.log(book)
  }, [])

  return (
    <div>
      <h1>Atualizar livro</h1>
    </div>
  )
}

export default UpdateBook
