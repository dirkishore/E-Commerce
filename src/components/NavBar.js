import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-3">
      <div className="container">
        <a
          href="/E-Commerce"
          className="navbar-brand text-success fs-4 fw-semibold"
        >
          Spicy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end text-bg-dark " id="navbar">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menus</h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a href="/" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link as={Link} className="nav-link" to="/E-Commerce/AboutPage">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link as={Link} className="nav-link" to="/E-Commerce/products">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link as={Link} className="nav-link" to="/E-Commerce/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <button className="btn btn-success">Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
