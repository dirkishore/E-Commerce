import NavBar from "../components/NavBar";

function HomePage() {
  return (
    <>
      <NavBar />
      <section className="home min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="centerText display-6 text-white">ORGANIC SPICES</h1>
        <p className="lead text-white text-center">
          varity's the very spice of life, that gives it all its flavor
        </p>

        <div className="container">
          <div className="row justify-content-center gap-2">
            <div className="col-md-4">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
              />
            </div>
            <div className="col-md-2">
              <button className="btn btn-success w-100">Get started</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
