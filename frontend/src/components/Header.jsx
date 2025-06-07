import React from "react";
import "../styles/index.css";

const Header = () => (
  <header className="header">
    <div className="header__container">
      <h1 className="header__logo">Uncleh25's Community Q&A Board</h1>
      <nav>
        <ul className="header__nav">
          <li><a href="/" className="header__link">Home</a></li>
          <li><a href="/ask" className="header__link">Ask a Question</a></li>
          <li><a href="/questions" className="header__link">View Questions</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;