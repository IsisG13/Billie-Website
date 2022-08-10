import React from 'react'
import ProductBox from '../ProductBox'
import pImage1 from '../../images/s1.png'
import pImage2 from '../../images/s2.png'
import pImage3 from '../../images/s3.png'
import './styles.css'

function Products() {
  return (
    <div id="products">
      <h1>PRINCIPAIS MÚSICAS</h1>
      <p>Top 3 musicas mais ouvidas da Billie</p>
      <div className="a-container">
        <ProductBox
          link="https://open.spotify.com/track/4RVwu0g32PAqgUiJoXsdF8?si=03380cc1b9cd4055"
          image={pImage1}
          title="Happier Than Ever"
        />
        <ProductBox
          link="https://open.spotify.com/track/0u2P5u6lvoDfwTYjAADbn4?si=3a1f07847d5e4406"
          image={pImage2}
          title="Lovely"
        />
        <ProductBox
          link="https://open.spotify.com/track/3GYlZ7tbxLOxe6ewMNVTkw?si=7edcfa9238694fbd"
          image={pImage3}
          title="TV"
        />
      </div>
    </div>
  )
}

export default Products
