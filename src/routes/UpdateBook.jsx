import booksFetch from "../Axios/config"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const UpdateBook = () => {
  const {id} = useParams()
  const [book, setBook] = useState({})
  const [editing, setEditing] = useState(false);

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

  const updateKey =(e) => {
    if(e.key === 'Enter'){
      setEditing(false)
    }
  }

  if(editing) {
    return (
      <input type="text" onKeyDown={updateKey} onChange={(e) => setBook({ titulo: e.target.value})}/>
    );
  }else{
    return (
      <>
        <h3>autor</h3>
        <p onClick={() => setEditing(true)}>{book.titulo}</p>
      </>
    );
  }
}

export default UpdateBook
