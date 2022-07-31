import { projectData } from './projectData';

export const FeaturedProjects = () => {
    return (
        <div className="row">
            {projectData.filter(project => project.featured)
                .map((project) => {
                    return (
                        <div className="col-md-6 col-lg-4" key={project.name}>
                            <div className="project">
                                <img src={project.image} alt="manage-it_screengrab"></img>
                                <h4>{project.name}</h4>
                                <p className="project-desc">{project.description}</p>
                                <p>{project.decription2}</p>
                                <div className="proj-btn-containter">
                                    <a href={project.links[1]} className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">Visit {project.name}</a>
                                    <a href={project.links[0]} className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">See Github Repo</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};


export const NonFeaturedProjects = () => {
    return (
        <div className="row row-square">
            {
                projectData.filter(project => !project.featured).map(project => {
                    return (
                        <div className="col-md-3" key={project.name}>
                            <div className="project-square">
                                <img src={project.image} alt="tech blog Screenshot"></img>
                                <div className="square-content">
                                    <h4>{project.name}</h4>
                                    <p>{project.decription}</p>
                                    <div className="proj-btn-containter">
                                        <a target="_blank" rel="noreferrer" href={project.links[1]}
                                            className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">Visit {project.name}</a>
                                        <a target="_blank" rel="noreferrer" href={project.links[0]}
                                            className="btn btn-outline-secondary btn-sm" role="button" aria-pressed="true">See Gitthub Repo</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};
