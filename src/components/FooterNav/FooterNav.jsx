import React from "react";
import "./style.css";
const FooterNav = () => {
  return (
    <nav>
      <div className="footer-menue">
        <ul>
          <li>
            <a
              href="https://abhirajmaid.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              v1
            </a>
          </li>
          <li>
            <a href="https://fb.com/khoannv1.com" target="_blank" rel="noreferrer">
              FB: KhoaNNV
            </a>
          </li>
          <li>
            <a href="#home">Back to Top</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default FooterNav;
