import Layout from "./components/layout/Layout";
import "./scss/_global.scss";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";

function App() {
  return (
    <section>
      <Layout>
        {/* <Home /> */}
        {/* <Destination /> */}
        {<Crew />}
      </Layout>
    </section>
  );
}

export default App;
