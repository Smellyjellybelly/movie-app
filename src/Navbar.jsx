

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>New Cinema!</h1>
            <div className="links">
                <a href="/">Verzehren</a>
                <a href="/Movies">Movies</a>
                <a href="/Showing">Bokning</a>
                <a href="/About">About</a>
                <a href="/Search">Search</a>

            </div>
        </nav>
    );
}

export default Navbar;