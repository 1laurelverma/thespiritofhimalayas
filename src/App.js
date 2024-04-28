import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TrekDetail from "./Pages/TrekDetail";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/trek/:id" element={<TrekDetail />} />
          <Route path="*" element={<h1>not found</h1>} />
        </Routes>
        <Footer />
        <a target="_blank" href="https://api.whatsapp.com/send?phone=&text=" class="whatsapp-button"><i class="fa fa-whatsapp"></i></a>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=&text=" class="phone-button"><i class="fa fa-phone"></i></a>
      </Router>
    </>
  );
}

export default App;
