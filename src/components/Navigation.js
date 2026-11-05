import { useEffect, useState } from "react";
import { Navbar } from "react-daisyui";
import { themeChange } from "theme-change";
import { Link, useLocation } from "react-router-dom";
import { pathConstants } from "../fileinfo/pathConstants";

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    themeChange(false);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <Navbar className="absolute top-4 md:top-8 z-30 px-2 md:px-0">
        <div className="flex-1 pl-4 md:pl-8 font-semibold font-display">
          <Link to={pathConstants.MAIN} className="text-3xl md:text-5xl site-title">
            rachel ombok
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex flex-none">
          <ul className="menu menu-horizontal pr-12 text-2xl space-x-1 font-body">
            <li>
              <Link to={pathConstants.MAIN}>Work</Link>
            </li>
            <li>
              <Link to={pathConstants.ABOUT}>About</Link>
            </li>
            <li>
              <Link to={pathConstants.RESUME}>Resume</Link>
            </li>
            <li>
              <details>
                <summary>Photography</summary>
                <ul className="p-2 bg-base-100 w-56 rounded-t-none absolute right-0">
                  <li>
                    <Link to={pathConstants.TRAVEL}>Travel</Link>
                  </li>
                  <li>
                    <Link
                      to="https://portfolio.rachelombok.com/concerts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="justify-between"
                    >
                      Portfolio{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden btn btn-ghost btn-square mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </Navbar>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 z-30 bg-base-100 shadow-lg border-t border-base-200">
          <ul className="menu menu-vertical text-xl font-body py-4 px-2">
            <li><Link to={pathConstants.MAIN} className="py-3 text-xl">Work</Link></li>
            <li><Link to={pathConstants.ABOUT} className="py-3 text-xl">About</Link></li>
            <li><Link to={pathConstants.RESUME} className="py-3 text-xl">Resume</Link></li>
            <li><Link to={pathConstants.TRAVEL} className="py-3 text-xl">Travel Photography</Link></li>
            <li>
              <a
                href="https://portfolio.rachelombok.com/concerts"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 text-xl flex items-center gap-2"
              >
                Photography Portfolio
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
