import React from "react";
import Header from "../components/ui/Header";
import Layout from "../components/ui/Layout";
import Form from "../features/todos/components/Form";
import List from "../features/todos/components/List";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
};

export default Home;
