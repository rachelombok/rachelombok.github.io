import './App.css';
import './styles/styles.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { Canvas } from './components/Canvas';
import { pathConstants } from './fileinfo/pathConstants';
import SiteLayout from './components/SiteLayout';
import AboutPage  from './pages/About';

// const About = React.lazy(() => import("../pages/About"))
function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <SiteLayout />,
      // child route components
      errorElement: <p>oops</p>,
      children: [
        {
          path: pathConstants.MAIN,
          element: <Canvas />,
        },
        // other pages....
        {
          path: pathConstants.ABOUT,
          element: <AboutPage/>,
        },
      ],
    },
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
