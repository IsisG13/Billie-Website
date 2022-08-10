import React from 'react'
import aboutImage from '../../images/about.png'
import './styles.css'

function About() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>Guitar songs</h1>
        <p>Esse é o Ep mais recente lançado pela Billie Eilish</p>
        <button> Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="" />
      </div>
    </div>
  )
}

export default About
