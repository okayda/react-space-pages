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
        {/* <Home /> */}
        {/* <Destination /> */}
        {/* {<Crew />} */}
        {<Technology />}
      </Layout>
    </section>
  );
}

export default App;
