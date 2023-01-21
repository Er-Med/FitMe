import React from 'react';
import '../../assets/css/AboutPage_style.css';
import TanslateOpacity from '../../utils/TranslateOpacity';
import { delivery } from '../../utils/Images';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className={TanslateOpacity() ? 'about show-item' : 'about hide-item'}>
      <div className="container">
        <div className="image">
          <img src={delivery} alt="" />
        </div>
        <div className="info" data-aos="fade-up">
          <div className="desc">
            <h2>
              a platform for ordering catering and tracking your diet and health
            </h2>
            <span> Fit ME</span>
            <p>
              This is a platform for ordering catering and tracking your diet and health. at Fit ME, you can always rely on qualified nutritionists and chefs who will make your life a little better and freer
            </p>
            <Link to="/" className="main-btn">Read More..</Link>
          </div>
        </div>
      </div>
    </section>

  );
}

export default About;