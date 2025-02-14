import { createBrowserRouter } from "react-router-dom";
import PropTypes from "prop-types";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import AboutPage from "../pages/AboutPage";
import NotFound from "../components/NotFound/NotFound";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired, 
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout><HomePage /></Layout>,
  },
  {
    path: "/about",
    element: <Layout><AboutPage /></Layout>,
  },
  {
    path: "/projects",
    element: <Layout><ProjectPage /></Layout>,
  },
  {
    path: "*",
    element: <Layout><NotFound /></Layout>,
  },
]);

export default routes;
