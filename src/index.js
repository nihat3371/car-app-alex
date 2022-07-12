import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Outlet, } from "react-router-dom";
import DummyComponent from "./components/DummyComponent";
import CarDetails from "./pages/CarDetails";
import { Home } from "@mui/icons-material";
import Cars from "./pages/Cars";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(


  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cars" element={<Outlet />} >
        <Route path="list" element={<Cars />} />
        <Route path=":vin" element={<CarDetails />} />
      </Route>
      <Route path="Home" element={<Home />} />
      <Route path="DummyComponent" element={<DummyComponent />} />

    </Routes>
  </BrowserRouter>

);
