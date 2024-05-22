import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className='p__opensans'>Welcome to our restaurant, where culinary artistry meets exceptional service. Our passion for fine dining is reflected in every dish we create, using only the freshest and highest quality ingredients. We strive to provide a memorable dining experience in an elegant and inviting atmosphere. Join us as we take you on a gastronomic journey that celebrates tradition, innovation, and the joy of sharing exquisite meals</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className='p__opensans'>Our restaurant began as a small, family-owned eatery, founded in 1985 with a passion for exquisite cuisine and warm hospitality. Over the years, we have grown into a renowned dining destination, celebrated for our commitment to culinary excellence and innovation. Our chefs have always prioritized using the freshest, locally-sourced ingredients, honoring both tradition and creativity in every dish. </p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;