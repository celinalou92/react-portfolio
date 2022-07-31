import React from 'react';
import './styles.css'



const SkillList = ({skills}) => {
    return (
        <div className="container skill-container">
            <h2>My Skill Set</h2>
            <div className="row icon-row">
            {
                skills.map((skill) => {
                    return (
                        <div className="col-md-3 col-sm-6 col-6" key={skill.name}>
                            <div className="skill-header">
                                <h3>{skill.name}</h3>
                            </div>
                            <div className="skill">
                                <img src={skill.image} alt={skill.name} className="skill-icon"></img>
                            </div>
                        </div>
                    )
                    
                })
            }
            </div>
        </div>
    )
}

export default SkillList;