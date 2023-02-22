import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import "./scss/_global.scss";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
  return (
    <section>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/home" element={<Home />} />
          <Route path="/destination/:destId" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology/:techId" element={<Technology />} />
        </Routes>
      </Layout>
    </section>
  );
}

export default App;
