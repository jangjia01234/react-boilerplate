import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";

import nikeLogo from "../../assets/Main/nike.png";

const Nav = () => {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    fetch("/data/navData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setNavData(data);
      });
  });

  return (
    <div className="nav">
      <div className="upperNav">
        <div className="upperNavLogo">
          {/* <span>조던</span>
          <span>컨버스</span> */}
        </div>
        <Link to="">회원가입 | 로그인</Link>
      </div>
      <div className="menuBox">
        <Link className="nikeLogo" to="/">
          <img alt="nikeLogo" src={nikeLogo} />
        </Link>
        <div className="menuText">
          <div className="menu">
            {navData.map((info) => {
              return (
                <span key={info.id}>
                  <Link to={info.url}>{info.menu}</Link>
                </span>
              );
            })}
          </div>
        </div>
        <div className="iconBox">
          <div className="searchBox">
            <input className="searchInput" type="text" placeholder="검색" />
            <button type="submit">
              <i class="fa-solid fa-magnifying-glass" />
            </button>
          </div>

          <Link>
            <i class="fa-solid fa-cart-shopping" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
