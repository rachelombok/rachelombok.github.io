import { Outlet } from "react-router-dom"
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import ScrollToTop from "./ScrollToTop";
import GoBack from "./GoBack";

export default function TravelLocationCarousel() {

    return(
<div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">

  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      className="rounded-box" />
  </div>
  
</div>
    );

};