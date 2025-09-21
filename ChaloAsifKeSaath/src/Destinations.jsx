import React from 'react';
import pic1 from './assets/pic1.avif';
import pic2 from './assets/pic2.avif';
import kar1 from './assets/kar1.avif';
import swat from './assets/swat.avif';
import isl1 from './assets/isl1.avif';
import lah1 from './assets/lah1.avif';

function Destinations() {
  return (
    <div className="container my-5">
      <div className="row g-4">
        
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card shadow-sm" style={{ width: '18rem' }}>
            <img src={pic1} className="card-img-top" alt="Gilgit Valley" />
            <div className="card-body">
              <h5 className="card-title">Gilgit</h5>
              <p className="card-text">
                Welcome to Gilgit.
              </p>
              <a href="#gilgit" className="btn btn-primary btn-sm">Explore</a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card shadow-sm" style={{ width: '18rem' }}>
            <img src={pic2} className="card-img-top" alt="Hunza Valley" />
            <div className="card-body">
              <h5 className="card-title">Hunza</h5>
              <p className="card-text">
               Welcome to Hunza.
              </p>
              <a href="#hunza" className="btn btn-primary btn-sm">Explore</a>
            </div>
          </div>
        </div>

         {/* Card 3 */}
        <div className="col-md-4">
          <div className="card shadow-sm" style={{ width: '18rem' }}>
            <img src={kar1} className="card-img-top" alt="City of lights Karachi" />
            <div className="card-body">
              <h5 className="card-title">Karachi</h5>
              <p className="card-text">
                Welcome to the city of light with me.
              </p>
              <a href="#karachi" className="btn btn-primary btn-sm">Explore</a>
            </div>
          </div>
        </div>
            
            {/* Card 4 */}
        <div className="col-md-4">
          <div className="card shadow-sm" style={{ width: '18rem' }}>
            <img src={swat} className="card-img-top" alt="swat" />
            <div className="card-body">
              <h5 className="card-title">swat</h5>
              <p className="card-text">
                Welcome to swat.
              </p>
              <a href="#swat" className="btn btn-primary btn-sm">Explore</a>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4">
          <div className="card shadow-sm" style={{ width: '18rem' }}>
            <img src={lah1} className="card-img-top" alt="lahore ke picture" />
            <div className="card-body">
              <h5 className="card-title">Lahore</h5>
              <p className="card-text">
                welcome to lahore.
              </p>
              <a href="#lahore" className="btn btn-primary btn-sm">Explore</a>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4">
          <div className="card shadow-sm" style={{ width: '18rem' }}>
            <img src={isl1} className="card-img-top" alt="islamabad ke picture" />
            <div className="card-body">
              <h5 className="card-title">Lahore</h5>
              <p className="card-text">
                welcome to lahore.
              </p>
              <a href="#islamabad" className="btn btn-primary btn-sm">Explore</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Destinations;
