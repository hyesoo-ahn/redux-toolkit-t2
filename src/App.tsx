import React from "react";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColor from "./components/ChangeColor";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Profile />
          <Login />
          <ChangeColor />
        </div>
      </Provider>
    </>
  );
}

export default App;
