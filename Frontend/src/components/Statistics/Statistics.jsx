import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Statistics.css'; // Your custom styles

const StatisticsSection = () => {
  const [triggered, setTriggered] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setTriggered(true)} onExit={() => setTriggered(false)}>
      <div className="statistics-section py-5" style={{ backgroundColor: '#ff914d' }}>
        <div className="container text-white text-center">
          <h2 className="mb-4">Our Achievements</h2>
          <div className="row">
            <div className="col-6 col-md-3 mb-4">
              <div className="counter">
                <h3 className="mb-2">
                  {triggered && <CountUp end={5000} duration={3} />}+
                </h3>
                <p className="small">Customer Reviews</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div className="counter">
                <h3 className="mb-2">
                  {triggered && <CountUp end={10} duration={3} />}+
                </h3>
                <p className="small">Years of Experience</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div className="counter">
                <h3 className="mb-2">
                  {triggered && <CountUp end={15000} duration={3} />}+
                </h3>
                <p className="small">Satisfied Clients</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div className="counter">
                <h3 className="mb-2">
                  {triggered && <CountUp end={20000} duration={3} />}+
                </h3>
                <p className="small">Total Dishes Sold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default StatisticsSection;
