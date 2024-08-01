import { useEffect } from 'react'
import { Navbar, Button, Menu } from "react-daisyui";
import { themeChange } from 'theme-change'
import { Link } from 'react-router-dom';

export const Navigation = () => {

  const toggleTheme = (theme) => {
    document.querySelector('html').setAttribute('data-theme', theme);
    // localStorage.getItem("theme")
    // localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

    return(
<Navbar className='px-28 pt-12 pb-20'>
<div className="flex-1">
    <a className="btn btn-ghost text-5xl site-title"><Link to='/'>rachel ombok</Link></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 text-2xl">
      <li><Link to='/'>Work</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/resume'>Resume</Link></li>
      <li>
        <details>
          <summary>
            Photography
          </summary>
          <ul className="p-2 bg-base-100 w-56 rounded-t-none absolute right-0">
            <li><Link to='/'>Travel</Link></li>
            <li><Link to='/'>Portfolio</Link></li>
          </ul>
        </details>
      </li>
      
    </ul>
  </div>
    </Navbar>
    );
};