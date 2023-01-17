import booksFetch from "../Axios/config"
import Editing from "../components/Editing"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const UpdateBook = () => {
  const {id} = useParams()
  const [book, setBook] = useState({})
  

  const getBook = async () => {
    const response = await booksFetch.get(`/livros/${id}`);
      try {
          const data = response.data;
          setBook(data);
      } catch (error) {
          console.log(error);
      }
  }
  useEffect(() => {
      getBook();
  }, [])

 

  return (
    <div className="content">
      <Editing
        campo = {book.titulo}
        value = "Titulo"
        callBack = {(e) => setBook({ titulo: e.target.value})}
      />
      <Editing
        campo = {book.autor}
        value = "Autor"
        callBack = {(e) => setBook({ autor: e.target.value})}
      />
      <Editing
        campo = {book.genero}
        value = "Gênero"
        callBack = {(e) => setBook({ genero: e.target.value})}
      />
      <Editing
        campo = {book.editora}
        value = "Editora"
        callBack = {(e) => setBook({ editora: e.target.value})}
      />
    </div>
  )
}

export default UpdateBook
