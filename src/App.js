import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SighIn from "./pages/SighIn";
import SighUp from "./pages/SighUp";
import ForgotPassword from "./pages/ForgotPassword";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Explore />}></Route>
        <Route path="/offers" element={<Offers />}></Route>
        <Route path="/profile" element={<SighIn />}></Route>
        <Route path="/sigh-in" element={<SighIn />}></Route>
        <Route path="/sigh-up" element={<SighUp />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
