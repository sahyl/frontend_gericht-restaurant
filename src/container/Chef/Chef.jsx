import React from "react";

import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";
const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chrf" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant"> What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Cooking is not just about ingredients, recipes, and techniques.It's</p>
        </div>
        <p className="p__opensans">
          {" "}
          about harnessing imagination, empowerment, and creativity. Every dish
          I create is a reflection of my passion for the culinary arts and my
          commitment to excellence. In our kitchen, we believe that the joy of
          cooking comes from the heart, and our goal is to share that joy with
          every guest who dines with us.
        </p>
      </div>
      <div className=" app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef and Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
