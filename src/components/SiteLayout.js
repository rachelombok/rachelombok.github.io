import { Outlet } from "react-router-dom"
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export default function SiteLayout() {
    return (
        <>
            <Navigation/>
            <main>                
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}