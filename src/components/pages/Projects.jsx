import React from 'react';
import manageIt from '../assets/imgs/manage-it_screengrab.png';
import EXTRAvert from '../assets/imgs/EXTRAvert_screengrab.png';
import CCE from '../assets/imgs/CCE_screengrab.png';
import techBlog from '../assets/imgs/tech-blog_screengrab.png';
import weatherdash from '../assets/imgs/weatherdash_screengrab.png';
import trulia from '../assets/imgs/trulia_screengrab.png';
import gitItDone from '../assets/imgs/git-it-done_screengrab.png';
import buddie from '../assets/imgs/buddie_screengrab.png'



function Projects() {
    return (
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
                            <div className="proj-btn-containter">
                                <a href="https://cryptic-bastion-04157.herokuapp.com/" className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">Visit Manage-it</a>
                                <a href="https://github.com/Xavy-Romeo/manage-it" className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">See Github Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="project">
                            <img src={EXTRAvert} alt="EXTRAvert_screengrab Screenshot"></img>
                            <h4>EXTRAvert</h4>
                            <p>An Event Decision, Front-End Application</p>
                            <p>HTML, CSS, Bulma CSS, Javascript, JQuery, Ticketmaster and Skyscanner API</p>
                            <div className="proj-btn-containter">
                                <a target="_blank" rel="noreferrer" href="https://unity7.github.io/EXTRAvert/"
                                    className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">Visit EXTRAvert</a>
                                <a target="_blank" rel="noreferrer" href="https://github.com/celinalou92/EXTRAvert"
                                    className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">See Github Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="project">
                            <img src={buddie} alt="Screen Shot of CCE Landing Page"></img>
                            <h4>Buddie</h4>
                            <p>A Social Media Full Stack Application</p>
                            <p>HTML, CSS, JavaScript, Node.js, Express, React, MongoDB, GraphQL</p>
                     
                            <div className="proj-btn-containter">
                                <a target="_blank" rel="noreferrer" href="https://buddie-app.herokuapp.com/"
                                    className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">Visit Buddie</a>
                                <a target="_blank" rel="noreferrer" href="https://github.com/Unity7/buddie"
                                    className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">See Github Repo</a>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="project">
                            <img src={CCE} alt="Screen Shot of CCE Landing Page"></img>
                            <h4>CCE Landing Page</h4>
                            <p>A Landing Page, Front-End Website</p>
                            <p>HTML, CSS, Mobile Responsive Design, Bootstrap, JavaScript</p>
                            <br></br>
                            <div className="proj-btn-containter">
                                <a target="_blank" rel="noreferrer" href="https://celinalou92.github.io/CCE-Website/"
                                    className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">Visit CCE</a>
                                <a target="_blank" rel="noreferrer" href="https://github.com/celinalou92/CCE-Website"
                                    className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">See Github Repo</a>
                            </div>

                        </div>
                    </div>


                </div>
                <div className="container-fluid">
                    <h2 className="projects-h2-text">More Projects</h2>
                    <div className="row row-square">
                        <div className="col-md-3">
                            <div className="project-square">
                                <img src={techBlog} alt="tech blog Screenshot"></img>
                                <div className="square-content">
                                    <h4>Tech Blog</h4>
                                    <p>A Full-Stack Blog App</p>
                                    <div className="proj-btn-containter">
                                        <a target="_blank" rel="noreferrer" href="https://tech-blog-23may21.herokuapp.com/"
                                            className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">Visit Tech-Blog</a>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/celinalou92/tech-blog"
                                            className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">See Gitthub Repo</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="project-square">
                                <img src={weatherdash} alt="weatherdash Screenshot"></img>
                                <div className="square-content">
                                    <h4>Weather App</h4>
                                    <p>A Front-End Forecast App</p>
                                    <div className="proj-btn-containter">
                                        <a target="_blank" rel="noreferrer" href="https://celinalou92.github.io/weatherdash/"
                                            className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">Visit Weather App</a>
                                        <a target="_blank" rel="noreferrer" href="https://github.com/celinalou92/weatherdash/"
                                            className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">See Github Repo</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="project-square">
                                <img src={gitItDone} alt="Git-It-Done Webpage"></img>
                                <div className="square-content">
                                    <h4>Git-it-Done!</h4>
                                    <p>A Front-End Github API Search App</p>
                                    <div className="proj-btn-containter">
                                    <a target="_blank" rel="noreferrer" href="https://celinalou92.github.io/git-it-done/"
                                        className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">Visit Git-it-Done!</a>
                                    <a target="_blank" rel="noreferrer" href="https://github.com/celinalou92/git-it-done"
                                        className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">See Github Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="project-square">
                                <img src={trulia} alt="recreation of trulia webpage"></img>
                                <div className="square-content">
                                    <h4>Trulia Recreation</h4>
                                    <p>A Front-End Recreation</p>
                                    <div className="proj-btn-containter">

                                    </div>
                                    <a target="_blank" rel="noreferrer" href="https://codepen.io/celinalou92/pen/MWwewWQ"
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