import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import DummyComponent from "./components/DummyComponent";
import Blog from "./pages/Blog";
import { Home } from "@mui/icons-material";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <BrowserRouter>
    <Routes>


      <Route exact path="/" element={<App />} />
      <Route path="Blog" element={<Blog />} />
      <Route path="Home" element={<Home />} />
      <Route path="DummyComponent" element={<DummyComponent />} />



    </Routes>
  </BrowserRouter>

);
