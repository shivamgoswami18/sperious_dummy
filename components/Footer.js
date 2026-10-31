export default function Footer() {
  return (
    <>
      <footer className="footer-area bg-with-black-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <h3>About Company</h3>
                  <p>
                    {" "}
                    Sperious is one of Indian leading companies in the field of
                    Web Development and Designing Company. The company offers a
                    large variety of services, including research, development
                    and technological works automation, distribution,
                    development and system integration of software and hardware.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Services</h3>
                <ul className="footer-services-list">
                  <li>
                    <a href="/Node">Node.js</a>
                  </li>
                  <li>
                    <a href="/React">React.js</a>
                  </li>
                  <li>
                    <a href="/Vue">Vue.js</a>
                  </li>
                  <li>
                    <a href="/Angular">Angular.js</a>
                  </li>
                  <li>
                    <a href="/ReactNative">React Native</a>
                  </li>
                  <li>
                    <a href="/Python">Python</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Quick Links</h3>
                <ul className="quick-links-list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/service">Services</a>
                  </li>
                  <li>
                    <a href="/aboutUs">About Us</a>
                  </li>
                  <li>
                    <a href="/contactUs">Contact Us</a>
                  </li>
                  <li>
                    <a href="#hire-developer" data-toggle="modal" data-target="#exampleModal">
                      Hire Developer
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Contacts</h3>
                <ul className="footer-contact-list">
                  <li>
                    <span>Address:</span> Science City Rd,
                    <br />
                    Ahemdabad - 380060
                  </li>
                  <li>
                    <span>Email:</span>{" "}
                    <a href="mailto:contact@sperious.co">contact@sperious.co</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container ">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>
                  Copyright © 2016 <a href="/">Sperious.</a> All Rights
                  Reserved.
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-map">
          <img src="/assets/img/circle-map.png" alt="image" />
        </div>
      </footer>

      <div className="go-top">
        <i className="fas fa-arrow-up"></i>
        <i className="fas fa-arrow-up"></i>
      </div>
    </>
  );
}
