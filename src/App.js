import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Connect_wallet from "./components/Connect_wallet";

function App() {
  return (
    <Router>
      <div className="dark-scheme de-clivus">
        <div id="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="connect_wallet" element={<Connect_wallet />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
