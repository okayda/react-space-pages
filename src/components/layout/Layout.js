import ReactDOM from "react-dom";

import MainNavigation from "./MainNavigation";

const Layout = function (props) {
  return (
    <>
      {ReactDOM.createPortal(
        <MainNavigation />,
        document.getElementById("main-header")
      )}

      {props.children}
    </>
  );
};

export default Layout;
