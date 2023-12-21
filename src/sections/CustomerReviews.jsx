import React from 'react'
import ReviewCard from '../components/ReviewCard'
import {reviews} from '../constants'

function CustomerReviews() {
  return (
    <section className='padding bg-pale-blue w-full'>
      <div className='max-container'>
        <h1 className='font-palanquin text-center text-4xl font-bold'>
          What Our
          <span className='text-coral-red '> Customers </span>
          Say?
        </h1>
        <p className='m-auto mt-4 max-w-lg  text-center info-text'>
          Hear genuine stories from our satisfied customers about their exceptional experiences with us.
        </p>
        <div className='flex flex-row justify-evenly items-center gap-11 mt-9'>
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews
