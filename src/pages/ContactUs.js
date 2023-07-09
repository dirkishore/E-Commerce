import contact from "../images/contact.jpg";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <>
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
                  <Link as={Link} className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link as={Link} className="nav-link " to="/AboutPage">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link as={Link} className="nav-link" to="/products">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link as={Link} className="nav-link active" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <button className="btn btn-success">Register</button>
            </div>
          </div>
        </div>
      </nav>

      <section>
        <div className="container pt-5 mt-5">
          <div className="row pt-4 gap-0">
            <div className="col-lg-6 pb-4">
              <img src={contact} alt="" className="w-100" />
            </div>
            <div className="col-lg-6 pb-4">
              <h1 className="text-center">Contact US</h1>
              <form action="" method="post">
                <div>
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="form-control"
                  />
                </div>

                <div className="mt-2">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>

                <div className="mt-2">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={4}
                    placeholder="Enter your message"
                  />
                </div>
                <div className="d-grid mt-2">
                  <button className="btn btn-success">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
