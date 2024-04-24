import { useState } from "react";
import NavBar from "./components/navBar/navBar";
import "./App.css";
import Home from "./pages/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import { Route, Routes } from "react-router-dom";
import Card from "./pages/Card/Card";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";

function App() {
  const [isLogIn, setIsLogIn] = useState(false);

  return (
    <>
      {isLogIn ? <LogIn setIsLogIn={setIsLogIn} /> : null}
      <NavBar setIsLogIn={setIsLogIn} />
      <Routes>
        <Route path="/Franchelli/" element={<Home />} />
        <Route path="/Franchelli/card" element={<Card />} />
        <Route path="/Franchelli/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
