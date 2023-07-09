import { Link } from "react-router-dom";
import product1 from "../images/img1.png";
import product2 from "../images/img2.png";
import product3 from "../images/img3.png";
import product4 from "../images/img4.png";
import product5 from "../images/img5.png";
import product6 from "../images/img6.png";
import product7 from "../images/img7.png";
import product8 from "../images/img8.png";
import product9 from "../images/img9.png";
import product10 from "../images/img10.png";
import product11 from "../images/img11.png";
import product12 from "../images/img12.png";

function ProductPage() {
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
                  <Link as={Link} className="nav-link active" to="/products">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link as={Link} className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <button className="btn btn-success">Register</button>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg">
        <div className="container pt-5 ">
          <h1 className="pt-5 mt-4 text-center">OUR PRODUCTS</h1>
          <div className="row mt-4 gap-0">
            <div className="col-md-3 mb-3 ">
              <div className="card h-100 w-100 ">
                <div className="card-body d-flex flex-column align-items-center text-center justify-content-between">
                  <div>
                    <img src={product1} className="card-img-top img-fluid" />
                  </div>
                  <div>
                    <p>Turmeric-$2</p>
                    <button
                      type="button"
                      className="btn btn-success stretched-link"
                    >
                      buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card h-100 w-100">
                <div className="card-body d-flex flex-column align-items-center text-center justify-content-between">
                  <div>
                    <img src={product2} className="card-img-top img-fluid" />
                  </div>
                  <div>
                    <p>Red Chilli Powder-$2</p>
                    <button
                      type="button"
                      className="btn btn-success stretched-link"
                    >
                      buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card h-100 w-100">
                <div className="card-body d-flex flex-column align-items-center text-center justify-content-between">
                  <div>
                    <img src={product3} className="card-img-top img-fluid" />
                  </div>
                  <div>
                    <p>Garam masala-$2</p>
                    <button
                      type="button"
                      className="btn btn-success stretched-link"
                    >
                      buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card h-100 w-100">
                <div className="card-body d-flex flex-column align-items-center text-center justify-content-between">
                  <div>
                    <img src={product4} className="card-img-top img-fluid" />
                  </div>
                  <div>
                    <p>Geru Powder-$2</p>
                    <button
                      type="button"
                      className="btn btn-success stretched-link"
                    >
                      buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row gap-0">
            <div className="col-md-3 mb-3">
              <div className="card h-100 w-100">
                <div className="card-body d-flex flex-column align-items-center text-center justify-content-between">
                  <div>
                    <img src={product5} className="card-img-top img-fluid" />
                  </div>
                  <div>
                    <p>Immunity Mixture-$2</p>
                    <button
                      type="button"
                      className="btn btn-success stretched-link"
                    >
                      buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card h-100 w-100">
                <div className="card-body d-flex flex-column align-items-center text-center justify-content-between">
                  <div>
                    <img src={product6} className="card-img-top img-fluid" />
                  </div>
                  <div>
                    <p>soonth Powder-$2</p>
                    <button
                      type="button"
                      className="btn btn-success stretched-link"
                    >
                      buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card h-100 w-100">
                <div className="card-body d-flex flex-column align-items-center text-center justify-content-between">
                  <div>
                    <img src={product7} className="card-img-top img-fluid" />
                  </div>
                  <div>
                    <p>Milk Masala-$2</p>
                    <button
                      type="button"
                      className="btn btn-success stretched-link"
                    >
                      buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card h-100 w-100">
                <div className="card-body d-flex flex-column align-items-center text-center justify-content-between">
                  <div>
                    <img src={product8} className="card-img-top img-fluid" />
                  </div>
                  <div>
                    <p>Tea Masala-$2</p>
                    <button
                      type="button"
                      className="btn btn-success stretched-link"
                    >
                      buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row gap-0">
            <div className="col-md-3 mb-3">
              <div className="card h-100 w-100">
                <div className="card-body d-flex flex-column align-items-center text-center justify-content-between">
                  <div>
                    <img src={product9} className="card-img-top img-fluid" />
                  </div>
                  <div>
                    <p>Black Pepper-$2</p>
                    <button
                      type="button"
                      className="btn btn-success stretched-link"
                    >
                      buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card h-100 w-100">
                <div className="card-body d-flex flex-column align-items-center text-center justify-content-between">
                  <div>
                    <img src={product10} className="card-img-top img-fluid" />
                  </div>
                  <div>
                    <p>Luster Dust-$3</p>
                    <button
                      type="button"
                      className="btn btn-success stretched-link"
                    >
                      buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card h-100 w-100">
                <div className="card-body d-flex flex-column align-items-center text-center justify-content-between">
                  <div>
                    <img src={product11} className="card-img-top img-fluid" />
                  </div>
                  <div>
                    <p>Fenugreek Seeds-$2</p>
                    <button
                      type="button"
                      className="btn btn-success stretched-link"
                    >
                      buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card h-100 w-100">
                <div className="card-body d-flex flex-column align-items-center text-center justify-content-between">
                  <div>
                    <img src={product12} className="card-img-top img-fluid" />
                  </div>
                  <div>
                    <p>Haldi Powder-$3</p>
                    <button
                      type="button"
                      className="btn btn-success stretched-link"
                    >
                      buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
