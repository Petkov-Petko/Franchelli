import { useState } from "react";
import NavBar from "./components/navBar/navBar";
import "./App.css";
import Home from "./pages/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import { Route, Routes } from "react-router-dom";
import Card from "./pages/Card/Card";
import Footer from "./components/Footer/Footer";

function App() {
  const [isLogIn, setIsLogIn] = useState(false);

  return (
    <>
      {isLogIn ? <LogIn setIsLogIn={setIsLogIn} /> : null}
      <NavBar setIsLogIn={setIsLogIn} />
      <Routes>
        <Route path="/Franchelli/" element={<Home />} />
        <Route path="/Franchelli/card" element={<Card />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
