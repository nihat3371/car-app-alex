import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cars from "./pages/Cars";
import CarList from "./pages/CarList";
import CarDetails from "./pages/CarDetails";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";


const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())(createStore)
  (reducers);

sagaMiddleware.run(rootSaga);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(


  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route path="/cars" element={<Cars />}>
          <Route path="list" element={<CarList />} />
          <Route path=":vin" element={<CarDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>



);
