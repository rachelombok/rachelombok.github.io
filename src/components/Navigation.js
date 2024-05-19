import { Navbar, Button, Menu } from "react-daisyui";

export const Navigation = () => {

    return(
<Navbar >
<div className="flex-1">
    <a className="btn btn-ghost text-4xl">rachel ombok</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 text-xl">
      <li><a>Work</a></li>
      <li><a>About</a></li>
      <li><a>Resume</a></li>
      <li>
        <details>
          <summary>
            Photography
          </summary>
          <ul className="p-2 bg-base-100 w-56 rounded-t-none absolute right-0">
            <li><a>Travel</a></li>
            <li><a>Portfolio</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
    </Navbar>
    );
};