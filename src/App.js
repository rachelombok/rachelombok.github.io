import "./App.css";
import "./styles/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Canvas } from "./components/Canvas";
import { pathConstants } from "./fileinfo/pathConstants";
import { ThemeProvider } from "./contexts/ThemeContext";
import ReactGA from 'react-ga4';
import SiteLayout from "./components/SiteLayout";
import AboutPage from "./pages/About";
import NotFoundPage from "./pages/404NotFoundError";
import JustShootPage from "./pages/JustShoot";
import ResumePage from "./pages/Resume";
import SulSulSimSimPage from "./pages/SulSulSimSim";
import RDSPage from "./pages/RDS";
import HandyMapPage from "./pages/HandyMap";
import BouncerBotPage from "./pages/BouncerBot";
import CovideasPage from "./pages/Covideas";
import TravelPage from "./pages/Travel";
import HuztlePage from "./pages/Huztle";
import GameDesignPage from "./pages/CS4553";
import GameProgrammingPage from "./pages/CS3113";
import ModelingPage from "./pages/DM2133";

function App() {
  ReactGA.initialize('G-NZZGYK7X33');

  const router = createBrowserRouter([
    {
      // parent route component
      element: <SiteLayout />,
      // child route components
      errorElement: <NotFoundPage />,
      children: [
        {
          path: pathConstants.MAIN,
          element: <Canvas />,
        },
        // other pages....
        {
          path: pathConstants.ABOUT,
          element: <AboutPage />,
        },
        {
          path: pathConstants.JUSTSHOOT,
          element: <JustShootPage />,
        },
        {
          path: pathConstants.RESUME,
          element: <ResumePage />,
        },
        {
          path: pathConstants.SULSULSIMSIM,
          element: <SulSulSimSimPage />,
        },
        {
          path: pathConstants.RDS,
          element: <RDSPage />,
        },
        {
          path: pathConstants.HANDYMAP,
          element: <HandyMapPage />,
        },
        {
          path: pathConstants.ULTRAHACKS,
          element: <BouncerBotPage />,
        },
        {
          path: pathConstants.COVIDFORECASTS,
          element: <CovideasPage />,
        },
        {
          path: pathConstants.TRAVEL,
          element: <TravelPage />,
        },
        {
          path: pathConstants.HUZTLE,
          element: <HuztlePage />,
        },
        {
          path: pathConstants.CS4553,
          element: <GameDesignPage />,
        },
        {
          path: pathConstants.CS3113,
          element: <GameProgrammingPage />,
        },
        {
          path: pathConstants.DM2133,
          element: <ModelingPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
