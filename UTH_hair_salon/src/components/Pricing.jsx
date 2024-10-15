import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'Làm đầu',
      price: 30,
      features: ['bla bla', 'bla bla', 'bla bla', 'bla bla', 'bla bla'],
    },
    {
      title: 'Làm mình',
      price: 40,
      features: ['bla bla', 'bla bla', 'bla bla', 'bla bla', 'bla bla'],
    },
    {
      title: 'làm chân',
      price: 10,
      features: ['bla bla', 'bla bla', 'bla bla', 'bla bla', 'bla bla'],
    },
  ];

  return (
    <section className="pricing">
      <div className="container">
        <h2>UTH Pricing</h2>
        <h3>Bla bla bla and bla</h3>
        {/* <p>
          Viet gi gio day troi
        </p> */}
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="pricing-card">
              <h3>{plan.title}</h3>
              <div className="price">${plan.price}</div>
              <p>Includes the services below</p>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button>Book an appointment</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
