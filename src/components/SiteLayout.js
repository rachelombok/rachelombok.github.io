import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import ScrollToTop from "./ScrollToTop";
import GoBack from "./GoBack";

export default function SiteLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <ScrollToTop />
      <GoBack />
      <Footer />
    </>
  );
}
