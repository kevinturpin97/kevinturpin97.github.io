import { Link } from "react-router-dom";
import img_1 from "../../assets/images/banner2.png";

function Header()
{
    return (
        <header>
            <div className="row justify-content-center">
                <h1 className="text-center">It's a pleasure.</h1>
                <div className="col-md-7" id="banner">
                    <img src={img_1} alt=""/>
                </div>
            </div>
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