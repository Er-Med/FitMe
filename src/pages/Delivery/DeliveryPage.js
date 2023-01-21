import React from 'react';
import TanslateOpacity from '../../utils/TranslateOpacity.js';
import '../../assets/css/DeliveryPage_style.css';
import DeliveryTime from './DeliveryTime';
import CitiesLsit from '../../data/CitiesList.js';
import { Link } from 'react-router-dom';

function Delivery() {

  return (
    <section className={TanslateOpacity() ? 'deliver-place y-center show-item' : 'deliver-place y-center hide-item'}>
      <div className="container">
        <div className="content">
          <div className="location flex-1 ">
            <h2 className="main-h2">Where we deliver</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, animi?
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
            <form action="">
              <input type="text" name="city-name" id="city-name" placeholder="City name" />
              <input type="text" name="nip" id="nip" placeholder="NIP" />
            </form>
            <div className="buttons">
              <Link to="/" className="main-btn">Check</Link>
              <Link to="/" className="y-center">
                <i className="fa-solid fa-location-crosshairs "></i>
                Location me
              </Link>
            </div>
          </div>
          <div className="cities flex-1">
            <ul>
              {
                CitiesLsit.map((city, index) => (
                  <li key={`${city}-${index}`}>{city}</li>
                ))
              }
            </ul>
          </div>
        </div>
        {(window.location.pathname === '/Delivery') ? <DeliveryTime /> : null}
      </div>
    </section>
  );
}

export default Delivery;