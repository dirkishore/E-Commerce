import aboutImg from "../images/about.png";
import { Link } from "react-router-dom";

function AboutPage() {
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
                  <Link as={Link} className="nav-link active" to="/AboutPage">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link as={Link} className="nav-link" to="/products">
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

      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6 mt-5 d-flex justify-content-center">
            <img src={aboutImg} alt="aboutImg" className="card-img w-75 " />
          </div>
          <div className="col-lg-6 mt-0 mt-lg-5 d-flex justify-content-center flex-column">
            <h1 className="aboutTitle">ABOUT US</h1>
            <p className="aboutText">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vel
              ipsum enim accusamus dolor illo sunt. Commodi quos nobis,
              provident, deserunt consequuntur deleniti voluptatem numquam
              laudantium ab in eaque quo! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Aliquid dolor ipsa vero quo quaerat
              reprehenderit dolorum iure quisquam earum inventore. Sit
              praesentium, incidunt pariatur officia numquam eligendi nam
              voluptatem tempora? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Optio molestiae delectus obcaecati modi quas
              quod saepe voluptates quo. Id cumque voluptas odit. Consequatur
              velit placeat enim dolor, tempora ratione quibusdam! Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Veniam eos inventore
              ducimus quae debitis animi eaque veritatis quam accusamus est!
              Dicta, eum. Fuga accusantium architecto nemo reprehenderit id
              culpa quos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
