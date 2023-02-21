import { Routes, Route, useLocation, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export const DestRoute = function ({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route path="/destination/:destId" element={children} exact />
      </Routes>
    </AnimatePresence>
  );
};

export const DestContentExtract = function (contentArr) {
  const params = useParams();
  const destId = params.destId;
  const [content] = contentArr.filter((obj) => obj.id === destId);

  return content;
};
