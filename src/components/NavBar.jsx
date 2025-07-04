import "../css/Navbar.css"
import {Link} from "react-router-dom"
function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App
            </Link>
         <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>   

        </div>
    </nav>
}

export default NavBar