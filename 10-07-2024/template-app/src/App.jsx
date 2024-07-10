import { useState } from "react";
import "./App.module.css";
import Layout from "./components/layout/Layout.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <div>
          <p>SONO UN LAYOUT</p>
        </div>
      </Layout>
    </>
  );
}

export default App;
