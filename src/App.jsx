import { Outlet } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";

import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />

      <Outlet />
    </>
  );
}

export default App;
