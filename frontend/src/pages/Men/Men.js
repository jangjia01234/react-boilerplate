import React from "react";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

import "./Men.scss";

const Men = () => {
  return (
    <div className="men">
      <Nav />
      <div className="menBox">
        <div>product</div>
        <div>product</div>
        <div>product</div>
        <div>product</div>
      </div>
      <Footer />
    </div>
  );
};

export default Men;
