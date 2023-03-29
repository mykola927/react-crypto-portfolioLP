import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">
        Hss Crypto Investment Inc. All Rights Reserved ©️&nbsp;{" "}
        {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
