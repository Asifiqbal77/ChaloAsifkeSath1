function Navigationbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-success sticky-top shadow-sm">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand text-white fw-bold" href="#">
          ChaloAsifKeSaath
        </a>

        {/* Toggler (visible on small screens only) */}
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

        {/* Menu items */}
        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#destinations">
                Destinations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#packages">
                Tour Packages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">
                About Us
              </a>
            </li>

            {/* On large screens → Login button shows normally 
                On medium screens → smaller button 
                On small screens → full width button */}
            <li className="nav-item mt-2 mt-lg-0">
              <a
                className="btn btn-outline-light btn-sm ms-lg-2 w-100 w-md-auto"
                href="#login"
              >
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
