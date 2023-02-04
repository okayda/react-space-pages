import ReactDOM from "react-dom";

import HeaderNavBar from "./HeaderNavBar/HeaderNavBar";

const Layout = function (props) {
  return (
    <>
      {ReactDOM.createPortal(
        <HeaderNavBar />,
        document.getElementById("main-header")
      )}

      {props.children}
    </>
  );
};

export default Layout;
