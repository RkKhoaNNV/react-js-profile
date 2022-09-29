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
              Phone: 0901908062
            </a>
          </li>
          <li>
            <a
              href="https://fb.com/khoannv1.com"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a href="#home">↟</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default FooterNav;
