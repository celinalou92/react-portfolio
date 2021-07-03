import React from 'react';
import celina from '../assets/imgs/celina-cut-out-0.75x.png';
import cssShield from '../assets/imgs/shields/cssShield.png';
import htmlShield from '../assets/imgs/shields/htmlShield.png';
import javascriptShield from '../assets/imgs/shields/javascriptShield.png';
import Bootstrap from '../assets/imgs/shields/Bootstrap.png';
import Illustrator from '../assets/imgs/shields/Illustrator.png';
import inDesign from '../assets/imgs/shields/InDesign.png';
import Photoshop from '../assets/imgs/shields/Photoshop.png';
import PremeirePro from '../assets/imgs/shields/Premeire Pro.png';



function About() {
  return (
      <div className="hero container-fluid">
        <div className="about-contents">
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
            <div data-aos="zoom-out"
              data-aos-delay="1000"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="hero-img">
              <img src={celina} alt="celina"></img>
            </div>
          </div>
        </div>

        <div className="container-fluid about">
          <div className="row">
            <div className="about-text">
              <h2>About Me</h2>
              <p>My name is Celina Louissaint I am a Long Beach based developer and I build fully responsive websites for small businesses, projects and individuals. I have a wide skill set that includes graphic design, video editing, and coding (front end). I can build your site, design your logo and create graphics for your business from beginning to end.</p>
            </div>
          </div>
        </div>

        <div className="container skill-container">
          <h2>My Skill Set</h2>
          <div className="row icon-row">
            <div className="col-md-3 col-sm-6 col-6">
              <div className="skill-header">
                <h3>HTML</h3>
              </div>
              <div className="skill">
                <img src={htmlShield} alt="" className="skill-icon"></img>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <div className="skill-header">
                <h3>CSS</h3>
              </div>
              <div className="skill">
                <img src={cssShield} alt="" className="skill-icon"></img>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <div className="skill-header">
                <h3>JavaScript</h3>
              </div>
              <div className="skill">
                <img src={javascriptShield} alt="" className="skill-icon"></img>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <div className="skill-header">
                <h3>Bootstrap</h3>
              </div>
              <div className="skill">
                <img src={Bootstrap} alt="" className="skill-icon"></img>
              </div>
            </div>
          </div>
          <div className="row icon-row">
            <div className="col-md-3 col-sm-6 col-6">
              <div className="skill-header">
                <h3>Photoshop</h3>
              </div>
              <div className="skill">
                <img src={Photoshop} alt="" className="skill-icon"></img>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <div className="skill-header">
                <h3>Illustrator</h3>
              </div>
              <div className="skill">
                <img src={Illustrator} alt="" className="skill-icon"></img>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <div className="skill-header">
                <h3>Premeire</h3>
              </div>
              <div className="skill">
                <img src={PremeirePro} alt="" className="skill-icon"></img>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <div className="skill-header">
                <h3>InDesign</h3>
              </div>
              <div className="skill">
                <img src={inDesign} alt="" className="skill-icon"></img>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  )
};



export default About;
