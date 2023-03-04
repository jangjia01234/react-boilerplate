import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<div>해당 주소는 없는 페이지입니다.</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
