import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import DummyComponent from "./components/DummyComponent";
import CarDetails from "./pages/CarDetails";
import { Home } from "@mui/icons-material";
import Cars from "./pages/Cars";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(


  <BrowserRouter>
    <Routes>

      <Route exact path="/" element={<App />} />
      <Route path="CarDetails" element={<CarDetails />} />
      <Route path="/cars" element={<Cars />}>
        <Route path=":vin" element={<CarDetails />} />
      </Route>
      <Route path="Home" element={<Home />} />
      <Route path="DummyComponent" element={<DummyComponent />} />

    </Routes>
  </BrowserRouter>

);
