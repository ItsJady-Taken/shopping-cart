import { Outlet } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

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
