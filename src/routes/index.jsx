import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AboutDetails from "../pages/AboutDetails";
import RootLayout from "../pages/Root";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, //useCase: index route - for showing a default page when parent path is in the url instead of path: '/'.
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/about/:type",
        element: <AboutDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    //** when a route path has a '/' at the starting path it is called absolute path
    //** when a route path doesn't have '/' at the starting route it is called relative path, they will automatically added on the current active route path.
    //** for parent route /root, child routes when '/' is removed in route path, they will automatically appended to their parent route path.
    //** <Link /> special prop relative="route/path" route is default but path is used to go back 1 step from the current route.
  },
]);

//older way of defining routes
// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//   </Route>
// );

// const router = createBrowserRouter(routerDefinitions);
export default router;
