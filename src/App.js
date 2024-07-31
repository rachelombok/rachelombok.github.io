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
import NotFoundPage from './pages/404NotFoundError';
import JustShootPage from './pages/JustShoot';
import ResumePage from './pages/Resume';
import SulSulSimSimPage from './pages/SulSulSimSim';

// const About = React.lazy(() => import("../pages/About"))
function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <SiteLayout />,
      // child route components
      errorElement: <NotFoundPage/>,
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
        {
          path: pathConstants.JUSTSHOOT,
          element: <JustShootPage/>,
        },
        {
          path: pathConstants.RESUME,
          element: <ResumePage/>,
        },
        {
          path: pathConstants.SULSULSIMSIM,
          element: <SulSulSimSimPage/>,
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
