import React from 'react'
import './styles.css'

function Header() {
  return (
    <div id="main">
      <div className="header-heading">
        <h3>Conheça a Billie Eilish</h3>
        <h1>
          <span>BILLIE </span> EILISH <br /> O'CONNELL
        </h1>
        <p className="details">
          Uma cantora que começou aos 14, e hoje é uma das maiores do mundo.
        </p>
        <div className="header-btns">
          <a
            href="https://pt.wikipedia.org/wiki/Billie_Eilish"
            className="header-btn"
            target="_blank"
            rel="noreferrer"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
