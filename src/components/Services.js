import React from 'react';

function Services() {
  const services = ['Haircut', 'Hair Coloring', 'Manicure', 'Pedicure'];

  return (
    <div className="container mx-auto px-4 py-8" id="services">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <ul>
        {services.map(service => (
          <li key={service} className="mb-2">{service}</li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
