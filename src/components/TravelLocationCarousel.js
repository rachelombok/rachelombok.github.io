import { Outlet } from "react-router-dom"
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import ScrollToTop from "./ScrollToTop";
import GoBack from "./GoBack";

export default function TravelLocationCarousel(props) {

    const location = props.locationName.split(",");
    const city = location[0];
    const country = location[1];

    return(
        <div className="not-prose my-16">
            <h2 class={`text-7xl font-bold mb-6 ${props.stylename}`}>{city},<span class="medium"> {country}</span></h2>
<div className="carousel carousel-center bg-neutral rounded-box space-x-6 p-6">
{props.images.map((image) =>{
    return <div className="carousel-item">
    <img
      src={image}
      className="carousel-img rounded-box" alt={`${props.locationName}`}/>
    
  </div>
            
        })}

</div>
</div>
    );

};