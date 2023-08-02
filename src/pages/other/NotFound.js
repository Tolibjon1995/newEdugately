import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import { useTranslation } from "react-i18next";
// import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const NotFound = () => {
  let { pathname } = useLocation();
  const { t } = useTranslation();
  return (
    <Fragment>
      <SEO
        titleTemplate="Not Found"
        description="404 Edugately.com platformasida mavjud bo'lmagan sahifalar."
      />
      <LayoutOne headerTop="visible">
        <div className="error-area pt-40 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 text-center">
                <div className="error">
                  <h1>404</h1>
                  <h2>{t('404')}</h2>
                  <p>
                    {t('4042')}
                  </p>
                  <Link to={process.env.PUBLIC_URL + "/"} className="error-btn">
                    {t('home')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default NotFound;
