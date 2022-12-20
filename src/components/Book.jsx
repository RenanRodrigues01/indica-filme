import booksFetch from "../Axios/config"
import { useState, useEffect } from "react"
import '../style/components/Book.sass'

const Books = () => {
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
        <section className="book">
            {books.length === 0 ? (<p>carregando...</p>) : (
                books.map((book) =>(
                    <div className="books" key={book._id} >
                        <h2>{book.titulo}</h2>
                        <div className="descripition">
                            <p><span>Autor:</span> {book.autor}</p>
                            <p><span>Gênero:</span> {book.genero}</p>
                            <p><span>Editora:</span> {book.editora}</p>
                        </div>
                    </div>
                ))
            )}
        </section>
    )
}

export default Books
