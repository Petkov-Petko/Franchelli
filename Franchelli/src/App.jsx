import { useState } from "react";
import NavBar from "./components/navBar/navBar";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;
