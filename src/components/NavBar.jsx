import menu from './assets/imgs/menu.png';
import { Link } from 'react-router-dom';


function NavBar() {


    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="brand">
                <a className="navbar-brand" href="/react-portfolio"> Celina Louissaint</a>
            </div>
            <div className="nav_content">
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <img src={menu} alt="exapandMenu" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/react-portfolio'>Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to='/resume'>Resume<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/contact">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};


export default NavBar;
