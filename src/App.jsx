import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

const AppContext = createContext();

function AppProvider({ children }) {
  const [items, setItems] = useState([]);

  const sendItems = (newItems) => {
    setItems(newItems);
  };

  return (
    <AppContext.Provider value={{ items, sendItems }}>
      {children}
    </AppContext.Provider>
  );
}

export function useItemsContext() {
  return useContext(AppContext);
}

function App() {
  return (
    <>
      <AppProvider>
        <Nav />
        <Outlet />
        <Footer />
      </AppProvider>
    </>
  );
}

export default App;
