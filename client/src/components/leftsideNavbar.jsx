import { Outlet, Link } from "react-router-dom";
import './styles/nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LeftsideNavbar(){
    return(
        <>
        <div id="sidebar" className="sidenav">
          <div>
            <FontAwesomeIcon icon="bars"  className="fa"/>
            <h1>NRG Keep</h1>
            </div>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button><Link to={`/dashboard`}>New</Link></button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/dashboard`}>Your Name</a>
              </li>
              <li>
                <a href={`/contacts/2`}>Your Friend</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>  
    )
}

export default LeftsideNavbar