import React from 'react';
import manageIt from '../assets/imgs/manage-it_screengrab.png';
import EXTRAvert from '../assets/imgs/EXTRAvert_screengrab.png';





function Projects(){
    return(
        <div>
            <h2 className="projects-h2-text">Web Dev Projects</h2>
    <div className="container-fluid projects-main">

      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="project">
            <img src={manageIt} alt="manage-it_screengrab"></img>
            <h4>Manage-it</h4>
            <p className="project-desc">A Task Manager, Full-Stack Application</p>
            <p>HTML, CSS, Bootstrap, Javascript, Node.js, Sequalize, Handlebars, Twilio API</p>
            <a href="https://cryptic-bastion-04157.herokuapp.com/" className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">Visit Manage-it</a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="project">
            <img src={EXTRAvert} alt="EXTRAvert_screengrab Screenshot"></img>
            <h4>EXTRAvert</h4>
            <p>An Event Decision, Front-End Application</p>
            <p>HTML, CSS, Bulma CSS, Javascript, JQuery, Ticketmaster and Skyscanner API</p>
            
            <a target="_blank" href="https://unity7.github.io/EXTRAvert/"
            className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">Visit EXTRAvert</a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="project">
            <img src="./imgs/CCE_screengrab.png" alt="person editing in adobe"></img>
            <h4>CCE Landing Page</h4>
            <p>A Landing Page, Front-End Website</p>
            <p>HTML, CSS, Mobile Responsive Design, Bootstrap, JavaScript</p>
            <a target="_blank" href="https://celinalou92.github.io/CCE-Website/"
            className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">Visit CCE</a>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h2 className="projects-h2-text">More Projects</h2>
        <div className="row row-square">
          <div className="col-md-3">
            <div className="project-square">
              <img src="./imgs/tech-blog_screengrab.png" alt="tech blog Screenshot"></img>
                <div className="square-content">
                  <h4>Tech Blog</h4>
                  <p>A Full-Stack Blog App</p>
                  <a target="_blank" href="https://tech-blog-23may21.herokuapp.com/"
                className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">Visit Tech-Blog</a>
                </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="project-square">
              <img src="./imgs/weatherdash_screengrab.png" alt="weatherdash Screenshot"></img>
                <div className="square-content">
                  <h4>Weather App</h4>
                  <p>A Front-End Forecast App</p>
                  <a target="_blank" href="https://celinalou92.github.io/weatherdash/"
                className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">Visit Weather App</a>
                </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="project-square">
              <img src="./imgs/git-it-done_screengrab.png" alt="person editing in adobe"></img>
                <div className="square-content">
                  <h4>Git-it-Done!</h4>
                  <p>A Front-End Github API Search App</p>
                  <a target="_blank" href="https://celinalou92.github.io/git-it-done/"
                className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">Visit Git-it-Done!</a>
                </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="project-square">
              <img src="./imgs/trulia_screengrab.png" alt="person editing in adobe"></img>
                <div className="square-content">
                  <h4>Trulia Recreation</h4>
                  <p>A Front-End Recreation</p>
                  <a target="_blank" href="https://codepen.io/celinalou92/pen/MWwewWQ"
                className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">Visit on Codepen</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}


export default Projects;