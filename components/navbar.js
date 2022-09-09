import React from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const handleClick = (path) => {
    router.push(path);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Website Test
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => handleClick("/")}>
                Homepage
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => handleClick("/about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => handleClick("/contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
