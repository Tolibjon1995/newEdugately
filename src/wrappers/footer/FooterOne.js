import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
// import FooterCopyright from "../../components/footer/FooterCopyright";
// import FooterNewsletter from "../../components/footer/FooterNewsletter";


const FooterOne = ({
  backgroundColorClass,
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  containerClass,
  extraFooterClass,
  sideMenu
}) => {
  return (
    <footer className={clsx("footer-area", backgroundColorClass, spaceTopClass, spaceBottomClass, extraFooterClass, spaceLeftClass, spaceRightClass)}>
      <div className={`${containerClass ? containerClass + " max-width px-6" : "container"}`}>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="row">
              <div
                className={`${sideMenu ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
                  }`}
              >
                {/* footer copyright */}
                <h1 className="text-white">Edugately</h1>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="row">
              <div
                className={`${sideMenu ? "col-12 col-md-4" : "col-12 col-md-4"
                  }`}
              >
                <div className="footer-widget mb-30 ml-30">
                  <div className="footer-title">
                    <h3>ABOUT US</h3>
                  </div>
                  <div className="footer-list">
                    <ul>
                      <li>
                        <Link to={process.env.PUBLIC_URL + "/about"}>About us</Link>
                      </li>
                      <li>
                        <Link to={process.env.PUBLIC_URL + "#/"}>
                          Store location
                        </Link>
                      </li>
                      <li>
                        <Link to={process.env.PUBLIC_URL + "/contact"}>
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link to={process.env.PUBLIC_URL + "#/"}>
                          Orders tracking
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className={`${sideMenu ? "col-12 col-md-4" : "col-12 col-md-4"
                  }`}
              >
                <div
                  className={`${sideMenu
                    ? "footer-widget mb-30 ml-95"
                    : "footer-widget mb-30 ml-50"
                    }`}
                >
                  <div className="footer-title">
                    <h3>USEFUL LINKS</h3>
                  </div>
                  <div className="footer-list">
                    <ul>
                      <li>
                        <Link to={process.env.PUBLIC_URL + "#/"}>Returns</Link>
                      </li>
                      <li>
                        <Link to={process.env.PUBLIC_URL + "#/"}>
                          Support Policy
                        </Link>
                      </li>
                      <li>
                        <Link to={process.env.PUBLIC_URL + "#/"}>Size guide</Link>
                      </li>
                      <li>
                        <Link to={process.env.PUBLIC_URL + "#/"}>FAQs</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className={`${sideMenu ? "col-12 col-md-4" : "col-12 col-md-4"
                  }`}
              >
                <div
                  className={`${sideMenu
                    ? "footer-widget mb-30 ml-145"
                    : "footer-widget mb-30 ml-75"
                    }`}
                >
                  <div className="footer-title">
                    <h3>FOLLOW US</h3>
                  </div>
                  <div className="footer-list">
                    <ul>
                      <li>
                        <a
                          href="//www.facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a
                          href="//www.twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a
                          href="//www.instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a
                          href="//www.youtube.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Youtube
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-4">

          </div>
          <div className="col-12 col-md-8">
            <div className="row">
              <div className="col-4">
                <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="47" viewBox="0 0 46 47" fill="none">
                    <path d="M3.8335 23.3602C3.8335 16.132 3.8335 12.5179 6.07901 10.2724C8.32453 8.02686 11.9386 8.02686 19.1668 8.02686H26.8335C34.0617 8.02686 37.6758 8.02686 39.9213 10.2724C42.1668 12.5179 42.1668 16.132 42.1668 23.3602C42.1668 30.5884 42.1668 34.2025 39.9213 36.448C37.6758 38.6935 34.0617 38.6935 26.8335 38.6935H19.1668C11.9386 38.6935 8.32453 38.6935 6.07901 36.448C3.8335 34.2025 3.8335 30.5884 3.8335 23.3602Z" stroke="white" stroke-width="1.5" />
                    <path d="M11.5 15.6938L15.6379 19.1421C19.1581 22.0756 20.9182 23.5424 23 23.5424C25.0818 23.5424 26.8419 22.0756 30.3621 19.1421L34.5 15.6938" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                  </svg>
                  <div>
                    <p className="mb-0 text-white ms-3">Почта для связи:</p>
                    <p className="mb-0 text-white ms-3">infoedugately@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="47" viewBox="0 0 46 47" fill="none">
                    <path d="M7.6665 19.8018C7.6665 11.1818 14.5315 4.19385 22.9998 4.19385C31.4682 4.19385 38.3332 11.1818 38.3332 19.8018C38.3332 28.3543 33.4393 38.3343 25.8038 41.9032C24.0238 42.7352 21.9758 42.7352 20.1959 41.9032C12.5604 38.3343 7.6665 28.3543 7.6665 19.8018Z" stroke="white" stroke-width="1.5" />
                    <circle cx="23" cy="19.5269" r="5.75" stroke="white" stroke-width="1.5" />
                  </svg>
                  <div>
                    <p className="mb-0 text-white ms-3">Наш адрес:</p>
                    <p className="mb-0 text-white ms-3">Toshkent sh. Furqat 23 A</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div >
                  <a href="tel:+998555061011" className="d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="47" viewBox="0 0 46 47" fill="none">
                      <path d="M26.8335 4.19385C26.8335 4.19385 31.0502 4.57718 36.4168 9.94385C41.7835 15.3105 42.1668 19.5272 42.1668 19.5272" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M27.23 10.9702C27.23 10.9702 29.1274 11.5123 31.9735 14.3584C34.8196 17.2045 35.3617 19.1019 35.3617 19.1019" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M19.2386 10.5495L20.4825 12.7785C21.6051 14.79 21.1544 17.4287 19.3864 19.1968C19.3864 19.1968 19.3864 19.1968 19.3864 19.1968C19.3862 19.1969 17.2418 21.3416 21.1302 25.2299C25.0178 29.1175 27.1624 26.9745 27.1632 26.9737C27.1632 26.9736 27.1632 26.9737 27.1633 26.9736C28.9313 25.2056 31.5701 24.7549 33.5816 25.8775L35.8105 27.1215C38.8479 28.8166 39.2066 33.0762 36.5368 35.7461C34.9326 37.3503 32.9673 38.5986 30.7948 38.681C27.1375 38.8196 20.9265 37.894 14.6963 31.6638C8.466 25.4335 7.54042 19.2225 7.67906 15.5653C7.76142 13.3928 9.00971 11.4275 10.614 9.82322C13.2838 7.1534 17.5434 7.51211 19.2386 10.5495Z" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    <div>
                      <p className="mb-0 text-white ms-3">+998 (55) 506 1011</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterOne.propTypes = {
  backgroundColorClass: PropTypes.string,
  containerClass: PropTypes.string,
  extraFooterClass: PropTypes.string,
  sideMenu: PropTypes.bool,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default FooterOne;
