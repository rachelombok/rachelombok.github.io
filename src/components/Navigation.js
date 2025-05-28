import { useEffect } from "react";
import { Navbar } from "react-daisyui";
import { themeChange } from "theme-change";
import { Link } from "react-router-dom";
import { pathConstants } from "../fileinfo/pathConstants";

export const Navigation = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Navbar className="px-28 pt-12 pb-20">
      <div className="flex-1">
       
          <Link to={pathConstants.MAIN} className="btn btn-ghost text-5xl site-title">rachel ombok</Link>
       
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-2xl space-x-1">
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
                  <Link to="https://portfolio.rachelombok.com/concerts" target="_blank" rel="noopener noreferrer" className="justify-between">Portfolio <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</Link>
                  
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </Navbar>
  );
};
