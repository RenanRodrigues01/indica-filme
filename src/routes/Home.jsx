import Book from "../components/Book"
import '../style/components/Home.sass'


const Home = () => {
  
  return (
    <section>
      <h1 className="title-home">Lista de Livros</h1>
        <div className="content">
          <Book />
        </div>
    </section>
  )
}

export default Home
