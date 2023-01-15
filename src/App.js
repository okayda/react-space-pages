import Layout from "./components/layout/Layout";
import "./scss/_global.scss";

import Home from "./pages/Home";

function App() {
  return (
    <section>
      <Layout>
        <Home />
      </Layout>
    </section>
  );
}

export default App;
