import React from 'react';
import {images} from '../../constants'
import { SubHeading } from '../../components';
const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact'/>
      <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>123 Gourmet Street,<br/> Downtown Food District,<br/> Metropolis City, NY 10001,<br/> United States of America</p>
        <p className='p__cormorant' style={{color:"#dcca87", margin:"2rem 0"}}> Opening Hours</p>
        <p className='p__opensans'>Monday - Friday : 08:00 am - 12:00 am</p>
        <p className='p__opensans'>Saturday - Sunday : 07:00 am - 11:00 pm</p>
      </div>
      <button className='custom__button' style={{marginTop:'2rem'}}>View More</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus'/>
    </div>
    
  </div>
);

export default FindUs;
