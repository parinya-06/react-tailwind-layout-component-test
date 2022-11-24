import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/index.js";
import About from "../page/About.js";
import Home from "../page/Home.js";
import Users from "../page/Users.js";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
