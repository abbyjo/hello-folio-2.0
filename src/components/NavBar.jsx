import { Link, useLocation } from 'react-router-dom';
import '../styles/Nav.css'

function NavBar() {
    const currentPage = useLocation().pathname;

    return (
     <ul id='nav-bar' className=" d-flex justify-content-around pb-3">
      <li className="pt-3">
        <Link
          to="/"
          className= {currentPage === '/' ? 'link-on' : 'link-off'}
        >
        About Me
        </Link>
      </li>
      <li className="pt-3">
        <Link
          to="/Portfolio"
          className= {currentPage === '/Portfolio' ? 'link-on' : 'link-off'}
        >
        Portfolio
        </Link>
      </li>
      <li className="pt-3">
        <Link
          to="/Contact"
          className= {currentPage === '/Contact' ? 'link-on' : 'link-off'}
        >
        Contact
        </Link>
      </li>
      <li className="pt-3">
        <Link
          to="/Resume"
          className= {currentPage === '/Resume' ? 'link-on' : 'link-off'}
        >
        Resume
        </Link>
      </li>
    </ul>
    );
}

export default NavBar;