import React from 'react';
import celina from '../assets/imgs/celina-cut-out-0.75x.png';
// import cssShield from '../assets/imgs/shields/cssShield.png';
// import htmlShield from '../assets/imgs/shields/htmlShield.png';
// import javascriptShield from '../assets/imgs/shields/javascriptShield.png';
// import Bootstrap from '../assets/imgs/shields/bootstrapShield.png';
// import Illustrator from '../assets/imgs/shields//Illustrator.png';
// import inDesign from '../assets/imgs/shields/InDesign.png';
// import Photoshop from '../assets/imgs/shields//Photoshop.png';
// import PremeirePro from '../assets/imgs/shields/Premeire Pro.png';
import SkillList from './Components/SkillList/SkillList';
import  { skills }  from './Components/SkillList/skillData';

function About() {
  return (
    <div id="hero" className="hero container-fluid">

      <div className="hero-contents">
        <div className="hero-text">
          <h1
            data-aos="flip-up"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            id="hero-h1">Hi,</h1>
          <h2
            data-aos="flip-up"
            data-aos-delay="500"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            id="im-celina">I'm Celina</h2>
          <div data-aos="fade-right" data-aos-easing="ease-in-out" class="hero-decoration"></div>
          <p data-aos="flip-down"
            data-aos-delay="1000"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            id="hero-p">Front-End Web Developer.</p>
          <div class="center-con" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="1000"
            data-aos-duration="1000"></div>
        </div>
        <div data-aos="zoom-out"
          data-aos-delay="1000"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="hero-img">
          <img src={celina} alt="celina"></img>
        </div>

      </div>

      <div className="container-fluid about">
        <div className="row">
          <div className="about-text">
            <h2>About Me</h2>
            <p>My name is Celina Louissaint I am a Long Beach California based developer and I build fully responsive websites for small businesses, projects and individuals. I have a wide skill set that includes graphic design, video editing, and coding. I can build your site, design your logo and create graphics for your business from beginning to end.</p>
            <p>You can contact me @ celinalouissaint@gmail.com</p>
          </div>
        </div>
      </div>
      <div>
        <SkillList skills={skills}/>
      </div>
    </div>

  )
};



export default About;
