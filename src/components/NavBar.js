function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-3">
      <div className="container">
        <a href="/" className="navbar-brand text-success fs-4 fw-semibold">
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
                <a href="/AboutPage" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/products" className="nav-link">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link">
                  Contact
                </a>
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
