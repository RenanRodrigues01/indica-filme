import '../style/components/Book.sass'
import { Link } from "react-router-dom"

const Books = ({books}) => {

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
                        <div>
                            <Link to = {`/update/${book._id}`} className="btn">editar</Link>
                            <button>excluir</button>
                        </div>
                    </div>
                ))
            )}
        </section>
    )
}

export default Books
