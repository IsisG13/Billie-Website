import React from 'react'
import ProductBox from './ProductBox'
import pImage1 from '../images/s1.png';
import pImage2 from '../images/s2.png';

function Products() {
    return (
        <div id="products">
            <h1>CHOOSE & ENJOY</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
            <div className="a-container">
                <ProductBox image={pImage1} title="Luger Burguer" />
                <ProductBox image={pImage2} title="Le Pigeon Burguer" />
                <ProductBox image={pImage1} title="Luger Burguer" />
            </div>
        </div>
    )
}

export default Products
