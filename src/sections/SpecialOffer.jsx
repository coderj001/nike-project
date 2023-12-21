import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

function SpecialOffer() {
  return (
    <section className='padding flex items-center justify-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt="Shoe  Promotion" width={666} height={666} />
      </div>
      <div className='flex-1'>
        <h2 className='font-palanquin text-4xl font-bold'><span className='text-coral-red'>Special</span> Offer</h2>
        <div className='mt-7 font-montserrat text-slate-gray'>
        <p className='break-words info-text mt-3'>
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className='break-words info-text mt-6'>
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        </div>
        <div className='flex gap-8 flex-wrap mt-11'>
          <Button iconURL={arrowRight} label='Shop Now'/>
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
