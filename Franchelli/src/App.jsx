import { useState } from "react";
import NavBar from "./components/navBar/navBar";
import "./App.css";
import Home from "./pages/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isLogIn, setIsLogIn] = useState(false);

  return (
    <>
      {isLogIn ? <LogIn setIsLogIn={setIsLogIn} /> : null}
      <NavBar setIsLogIn={setIsLogIn} />
      <Routes>
        <Route path="/Franchelli/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
