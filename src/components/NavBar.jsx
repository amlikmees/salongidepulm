import "./NavBar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <a href="#home">Märten & Kristel</a>

            <div className="navbar-links">
                <a href="#home">Avaleht</a>
                <a href="#info">Pulmapäev</a>
                {/*<a href="#rsvp">RSVP</a> */}
            </div>
        </nav>
    );
}

export default Navbar;