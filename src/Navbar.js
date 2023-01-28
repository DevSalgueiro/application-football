import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav>
        <Link to="/">Projeto</Link>
        <Link to="/Sobre">Sobre</Link>
        <Link to="/contato">contato</Link>
    </nav>
  )
}


export default Navbar;