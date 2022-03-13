function MyHeader() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark p-0 text-light">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">RainMan</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="navbar-toggler-icon"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Portfolio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    About Me
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default MyHeader;