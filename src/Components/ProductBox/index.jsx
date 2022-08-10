import React from 'react'
import './styles.css'

function ProductBox(props) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} alt="" />
      </div>
      <div className="a-b-text">
        <h2> {props.title} </h2>
        <button className="productbox-button">
          <a className="product-link" href={props.link}>
            Ouvir
          </a>
        </button>
      </div>
    </div>
  )
}

export default ProductBox
