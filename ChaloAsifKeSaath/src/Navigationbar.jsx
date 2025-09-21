function Navigationbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-success sticky-top shadow-sm">
      <div className="container">
        <a className="navbar-brand text-white" href="#">ChaloAsifKeSaath</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#destinations">Destinations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#packages">Tour Packages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-light btn-sm ms-2" href="#login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigationbar;
