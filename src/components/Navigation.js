import { useEffect } from 'react'
import { Navbar, Button, Menu } from "react-daisyui";
import { themeChange } from 'theme-change'
import { Link } from 'react-router-dom';
import { pathConstants } from '../fileinfo/pathConstants';

export const Navigation = () => {

  useEffect(() => {
    themeChange(false)
  }, [])

    return(
<Navbar className='px-28 pt-12 pb-20'>
<div className="flex-1">
    <a className="btn btn-ghost text-5xl site-title"><Link to={pathConstants.MAIN}>rachel ombok</Link></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 text-2xl space-x-1">
      <li><Link to={pathConstants.MAIN}>Work</Link></li>
      <li><Link to={pathConstants.ABOUT}>About</Link></li>
      <li><Link to={pathConstants.RESUME}>Resume</Link></li>
      <li>
        <details>
          <summary>
            Photography
          </summary>
          <ul className="p-2 bg-base-100 w-56 rounded-t-none absolute right-0">
            <li><Link to={pathConstants.TRAVEL}>Travel</Link></li>
            <li className="disabled"><Link to={pathConstants.MAIN} >Portfolio (WIP 🚧)</Link></li>
          </ul>
        </details>
      </li>
      
    </ul>
  </div>
    </Navbar>
    );
};