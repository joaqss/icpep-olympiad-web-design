import '../css/Navbar.css';

function HeaderNavbar() {

    return (
        <nav className="navbar-container">
            <div className="logo-container">
                <a href="/">Web</a>
            </div>
            <ul>

                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Outputs</a></li>
                <li><a href="/contact">Action</a></li>
            </ul>
        </nav>
    );
}

export default HeaderNavbar;