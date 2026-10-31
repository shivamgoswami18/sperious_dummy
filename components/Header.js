"use client";

import { usePathname } from "next/navigation";
import HireModal from "./HireModal";

function Logo() {
  return (
    <h3 style={{ color: "blue" }}>
      <img
        src="/assets/img/SPERIOUS S PNG.png"
        alt="logo"
        style={{ maxHeight: 36 }}
      />{" "}
      Sperious
    </h3>
  );
}

export default function Header() {
  const pathname = usePathname();

  const isActive = (href) => (pathname === href ? "nav-link active" : "nav-link");

  return (
    <>
      <HireModal />

      <div className="preloader">
        <div className="sk-circle">
          <div className="sk-circle1 sk-child"></div>
          <div className="sk-circle2 sk-child"></div>
          <div className="sk-circle3 sk-child"></div>
          <div className="sk-circle4 sk-child"></div>
          <div className="sk-circle5 sk-child"></div>
          <div className="sk-circle6 sk-child"></div>
          <div className="sk-circle7 sk-child"></div>
          <div className="sk-circle8 sk-child"></div>
          <div className="sk-circle9 sk-child"></div>
          <div className="sk-circle10 sk-child"></div>
          <div className="sk-circle11 sk-child"></div>
          <div className="sk-circle12 sk-child"></div>
        </div>
      </div>

      <div className="navbar-area navbar-area-with-position-relative navbar-style-wrap">
        <div className="evolta-responsive-nav">
          <div className="container">
            <div className="evolta-responsive-menu">
              <div className="logo black-logo">
                <a href="/">
                  <Logo />
                </a>
              </div>
              <div className="logo white-logo">
                <a href="/">
                  <Logo />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="evolta-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand black-logo" href="/">
                <Logo />
              </a>
              <a className="navbar-brand white-logo" href="/">
                <Logo />
              </a>

              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="/" className={isActive("/")}>
                      Home{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/service" className={isActive("/service")}>
                      Services{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/aboutUs" className={isActive("/aboutUs")}>
                      About Us{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/contactUs" className={isActive("/contactUs")}>
                      Contact Us{" "}
                    </a>
                  </li>
                  <li>
                    <div className="btn-box" style={{ paddingTop: 6 }}>
                      <a
                        href="#hire-developer"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        style={{ color: "white" }}
                      >
                        Hire Developer
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
