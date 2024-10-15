import React, { useState } from 'react'
import ProductCards from './ProductCards'
import product from '../../data/products.json'

const TrendingProducts = () => {

    const [visibleProducts, setVisibleProducts] = useState(8);
    const loadMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 4)
    }

  return (
    <div className='section__container product_container'>
        <h2 className='section__header'>Trending Products</h2>
        <p className='section__subheader mb-12'>Discover the Hottest Picks. Elevate your style with our Curated Collection of
        Trending Women's Fashion Products.
        </p>

        {/* product cards */}
        <div className='mt-12'>
          <ProductCards products={product.slice(0, visibleProducts)}/>
        </div>

        {/* more products */}
        <div className='product__btn'>
          {
            visibleProducts < product.length && (
              <button className='btn' onClick={loadMoreProducts}>Load more</button>
            )
          }
        </div>
    </div>
  )
}

export default TrendingProducts