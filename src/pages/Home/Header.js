import { Link } from "react-router-dom";

function Header()
{
    return (
        <header>
            <nav className="navbar navbar-expand-md">
               <div className="container-fluid justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link">Home</Link>
                        </li>    
                        <li className="nav-item">
                            <Link to={"/me"} className="nav-link">Me</Link>
                        </li>    
                        <li className="nav-item">
                            <Link to={"/portfolio"} className="nav-link">Portfolio</Link>
                        </li>    
                        <li className="nav-item">
                            <Link to={"/contact"} className="nav-link">Contact</Link>
                        </li>    
                    </ul>   
                </div>
            </nav>
        </header>
    );
}

export default Header;