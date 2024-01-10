import react from "react";
import "./Navbar.css";


export default function Navbar(props) {
  return (
    <>
      <nav id="navbar">
        <div id="topnav" style={{ border: "2px solid red" }}>
          <div id="lefttopnav">
            <img src={props.logo} alt="error" height={10} width={10} />
            <a href="">{props.webpagename}</a>
          </div>
          <div id="righttopnav">
            <a href="">
              <i class="fa-brands fa-square-github"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
        <div id="bottomnav" style={{ border: "2px solid blue" }}>
          <div id="leftnav">
            <ul id="nav-ul">
              <li>
                <a href="/">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About us
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Who We Are
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Our Team
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      View
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Bus{" "}
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Metro
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Feed Back</a>
              </li>
              <li>
                <a href="/">Help</a>
              </li>
            </ul>
          </div>
          <div id="rightnav">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.defaultProps = {
    logo: "Enter url here",
    webpagename: "WebPage Name Here",
  };
  
Navbar.propTypes = {
    logo: PropTypes.string.isRequired,
    webpagename: PropTypes.string.isRequired,
  };
  

