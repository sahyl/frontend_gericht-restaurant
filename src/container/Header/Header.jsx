import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Discover the pinnacle of culinary excellence at our restaurant, where every meal is a masterpiece. Our chefs craft each dish with the finest ingredients, blending tradition and innovation to delight your palate. The elegant ambiance and impeccable service create an unforgettable dining experience. Join us and uncover the key to fine dining</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;