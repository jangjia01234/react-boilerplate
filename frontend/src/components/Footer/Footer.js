import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerMenu info">
        <Link to="">
          <h3>새로운 소식</h3>
        </Link>
        <Link to="">
          <h3>멤버가입</h3>
        </Link>
        <Link to="">
          <h3>매장안내</h3>
        </Link>
      </div>
      <div className="footerMenu help">
        <Link to="">
          <h3>도움말</h3>
        </Link>
        <Link to="">
          <h6>주문배송조회</h6>
        </Link>
        <Link to="">
          <h6>반품 정책</h6>
        </Link>
        <Link to="">
          <h6>결제 방법</h6>
        </Link>
        <Link to="">
          <h6>공지사항</h6>
        </Link>
        <Link to="">
          <h6>문의하기</h6>
        </Link>
      </div>
      <div className="footerMenu about">
        <Link to="">
          <h3>ABOUT NIKE</h3>
        </Link>
        <Link to="">
          <h6>소식</h6>
        </Link>
        <Link to="">
          <h6>채용</h6>
        </Link>
        <Link to="">
          <h6>투자자</h6>
        </Link>
        <Link to="">
          <h6>지속가능성</h6>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
