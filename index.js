import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Register,
  Products,
  Login,
  AddPage,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addpage" element={<AddPage />}>
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
