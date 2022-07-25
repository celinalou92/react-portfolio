import React from 'react';
import cssShield from '../../../assets/imgs/shields/cssShield.png';
import htmlShield from '../../../assets/imgs/shields/htmlShield.png';
import javascriptShield from '../../../assets/imgs/shields/javascriptShield.png';
import Bootstrap from '../../../assets/imgs/shields/bootstrapShield.png';
import Illustrator from '../../../assets/imgs/shields/Illustrator.png';
import inDesign from '../../../assets/imgs/shields/InDesign.png';
import Photoshop from '../../../assets/imgs/shields/Photoshop.png';
import PremeirePro from '../../../assets/imgs/shields/Premeire Pro.png';
import './styles.css'

function SkillList() {
    return (
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
    )
}

export default SkillList;