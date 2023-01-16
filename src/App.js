import Layout from "./components/layout/Layout";
import "./scss/_global.scss";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
function App() {
  return (
    <section>
      <Layout>
        {/* <Home /> */}
        <Destination />
      </Layout>
    </section>
  );
}

export default App;
