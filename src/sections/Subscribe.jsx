import React from 'react'
import Button from '../components/Button'

function Subscribe() {
  return (
    <section
      id='contact-us'
      className='padding-x sm:py-32 py-16 w-full'
    >
      <div className='max-container flex justify-between items-center max-lg:flex-col gap-10'>
        <h1 className='font-palanquin font-bold text-4xl leading-[68px]'>
          Sign Up for
          <span className='text-coral-red'> Updates </span><br />& Newsletter
        </h1>
        <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
          <input type='text' placeholder='subscribe@nike.com' className='input' />
          <div className='flex max-sm:justify-end items-center max-sm:w-full'>
            <Button label='Sign Up' fullWidth />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
