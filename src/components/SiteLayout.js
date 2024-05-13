import { Outlet } from "react-router-dom"
import { Navigation } from "./Navigation";

export default function SiteLayout() {
    return (
        <>
            <Navigation/>
            <main>                
                <Outlet />
            </main>
        </>
    )
}