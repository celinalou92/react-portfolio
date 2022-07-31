import React from 'react';
import { FeaturedProjects, NonFeaturedProjects } from './Components/ProjectList/ProjectList';
import {projectData} from "../pages/Components/ProjectList/projectData"

const Projects = () => {
    return (
        <div>
            <br/>
            <h2 className="projects-h2-text">Web Dev Projects</h2>
            <div className="container-fluid projects-main">
                <FeaturedProjects project={projectData}/>
                <div className="container-fluid">
                    <h2 className="projects-h2-text">More Projects</h2>
                <NonFeaturedProjects/>
                </div>
            </div>
        </div>
    )
}


export default Projects;
