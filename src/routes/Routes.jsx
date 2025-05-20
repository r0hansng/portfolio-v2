import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import AboutPage from "../pages/AboutPage";
import NotFound from "../components/NotFound/NotFound";
import AppLayout from "../components/AppLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/projects",
        element: <ProjectPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ]
  }
])

export default routes;
