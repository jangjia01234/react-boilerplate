import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/theme.css";

import Home from "./pages/Home";

function Router() {
  return (
    <div className="Router">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>해당 주소는 없는 페이지입니다.</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default Router;
