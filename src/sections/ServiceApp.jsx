import React from 'react'
import { services } from '../constants';
import ServiceCard from '../components/ServiceCard';

function ServiceApp() {
  return (
    <div className='max-container flex gap-5'>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </div>
  )
}

export default ServiceApp;
