import ReactDOM from "react-dom";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HeaderNavBar from "../components/HeaderNavBar/HeaderNavBar";

import "../scss/_global.scss";

const RootLayout = function () {
  const location = useLocation();
  return (
    <>
      {ReactDOM.createPortal(
        <HeaderNavBar />,
        document.getElementById("main-header")
      )}
      <section>
        <AnimatePresence mode="wait" initial={true}>
          <Outlet location={location} key={location.pathname} />
        </AnimatePresence>
      </section>
    </>
  );
};

export default RootLayout;
