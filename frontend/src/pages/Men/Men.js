import React, { useEffect, useState } from "react";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

import "./Men.scss";

const Men = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("/data/productListData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
      });
  });

  return (
    <div className="men">
      <Nav />
      <div className="menBox">
        <div className="filter">
          <h4>남성 신발</h4>
          <div className="category">카테고리</div>
          <div className="gender">남여</div>
          <div className="color">색상</div>
        </div>
        <div className="productList">
          {productData.map((info) => {
            return (
              <div className="productBox" key={info.id}>
                <div className="productBoxImg"></div>
                <img
                  className="productImg"
                  alt="productImg"
                  src={info.img_url}
                />
                <div className="productBoxText">
                  <div className="productName">{info.name}</div>
                  <div className="productPrice">{info.price} 원</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Men;
