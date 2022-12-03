import React, { useReducer } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav";
import Basket from "./pages/basket/Basket";
import { StateContext } from "./contex2/context2";
import { reducer, initialState } from "./reducer2/reducer2";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
    </StateContext.Provider>
  );
}

export default App;
