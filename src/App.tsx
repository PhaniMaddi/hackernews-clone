import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./screen/HomePage";
import { store } from "./store";

import "./App.css";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Header />
          <HomePage />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
