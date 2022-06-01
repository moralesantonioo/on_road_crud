import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from '../view/Login'
import { RegisterUsers } from '../view/registerUser'
import { Home } from '../view/Home'
import { Layout } from "../layout"

export const AppRoutes = () => {
  if (window.localStorage.getItem("token") === null) {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registro" element={<RegisterUsers />} />
          </Routes>
        </Router>
      </>
    );
  }
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}