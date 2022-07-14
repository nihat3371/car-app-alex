import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cars from "./pages/Cars";
import CarList from "./pages/CarList";
import CarDetails from "./pages/CarDetails";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route path="/cars" element={<Cars />}>
        <Route path="list" element={<CarList />} />
        <Route path=":vin" element={<CarDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>


);
