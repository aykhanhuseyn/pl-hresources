import React from "react";
import CardView from "./components/CardView";
import Search from "./components/Search";
import Structure from "./components/Structure";
import Layout from "./layout";
import "./app.scss";

const App = () => {
  return (
    <Layout>
      <Search />
      <Structure />
      <CardView />
    </Layout>
  );
};

export default App;
