import booksFetch from "../Axios/config"
import Editing from "../components/Editing"
import '../style/components/UpdateBook.sass'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const UpdateBook = () => {
  const {id} = useParams()
  const [book, setBook] = useState({})
  const navigate = useNavigate()
  

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

  const sendUpdate = async () => {
    await booksFetch.put(`/livros/${id}`, book);
    try {
      navigate("/")
    } catch (error) {
      console.log("deu errado", error);
    }
    
  }

 

  return (
    <section className="container-update">
      <h2>Atualizar Livro</h2>
      <div className="main-updateBook">
        <Editing
          campo = {book.titulo}
          value = "Titulo"
          callBack = {(e) => setBook(prevValue => ({
            ...prevValue,
            titulo: e.target.value
          }))}
        />
        <Editing
          campo = {book.autor}
          value = "Autor"
          callBack = {(e) => setBook(prevValue => ({
            ...prevValue,
            autor: e.target.value
          }))}
        />
        <Editing
          campo = {book.genero}
          value = "Gênero"
          callBack = {(e) => setBook(prevValue => ({
            ...prevValue,
            genero: e.target.value
          }))}
        />
        <Editing
          campo = {book.editora}
          value = "Editora"
          callBack = {(e) => setBook(prevValue => ({
            ...prevValue,
            editora: e.target.value
          }))}
        />

        <button onClick={sendUpdate} className="btn">Atualizar</button>
      </div>
      
    </section>
  )
}

export default UpdateBook
