import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'

function PopularProducts() {
  return (
    <section id="products" className='padding w-full min-h-screen gap-10 max-container'>
      <div className='flex flex-col justify-start gap-5 py-10'>
        <h1 className='font-palanquin font-bold text-4xl'>
          Our <span className='text-coral-red'> Popular </span> Products
        </h1>
        <p className='font-montserrat text-slate-gray lg:max-w-lg mt-2'>
          Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.
        </p>
      </div>
      <div className='flex items-center justify-center w-full h-full py-24 sm:py-8 px-4'>
        <div className='w-full h-full mx-auto overflow-x-hidden overflow-y-hidden'>
          <div className='h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700'>
            {products.map((product) => (
              <PopularProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularProducts
