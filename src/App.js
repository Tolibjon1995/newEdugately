import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// home pages
const MainPage = lazy(() => import("./pages/home/MainPage"));
const Login = lazy(() => import("./pages/loginRegist/Login"));
const Registratsiya = lazy(() => import("./pages/loginRegist/Registratsiya"));
const ForvardPass = lazy(() => import("./pages/loginRegist/ForvardPass"));
const ForgotPass2 = lazy(() => import("./pages/loginRegist/FargotPass2"));

const NotFound = lazy(() => import("./pages/other/NotFound"));

const App = () => {
  return (
      <Router>
        <ScrollToTop>
          <Suspense
            fallback={
              <div className="flone-preloader-wrapper">
                <div className="flone-preloader">
                  <span></span>
                  <span></span>
                </div>
              </div>
            }
          >
            <Routes>
              <Route
                path={process.env.PUBLIC_URL + "/"}
                element={<MainPage/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/login"}
                element={<Login/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/registr"}
                element={<Registratsiya/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/forgotPass"}
                element={<ForvardPass/>}
              />
              <Route
                path={process.env.PUBLIC_URL + "/forgotPass2"}
                element={<ForgotPass2/>}
              />

              <Route path="*" element={<NotFound/>} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </Router>
  );
};

export default App;