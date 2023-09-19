const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <a href="/">Verzehren</a>
                {/* <a href="/Movies">Movies</a> */}
                <a href="/Search">Filmer</a>
                <a href="/Showing">Bokning</a>
                <a href="/About">Om biografen</a>
            </div>
        </nav>
    );
}

export default Navbar;