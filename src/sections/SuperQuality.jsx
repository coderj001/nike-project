import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

function SuperQuality() {
  return (
    <section id="about-us" className='padding flex justify-center items-center w-full min-h-screen max-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin font-bold text-4xl'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'> Quality </span>
          Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-10'>
          <Button label="View Details" />
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  )
}

export default SuperQuality