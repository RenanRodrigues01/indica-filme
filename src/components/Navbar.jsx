import "../style/components/Navbar.sass"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1 className="title">
            <Link to={'/'}>Indica Livro</Link>
        </h1>

        <p>
            <Link to={'/new'} className="btn">Novo Livro</Link>
        </p>
    </nav>
  )
}

export default Navbar
