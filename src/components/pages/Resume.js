import React from 'react';
import resume from '../assets/imgs/resumeCelina.jpg'


function Resume() {
    return (
        <div className="resume">
            <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1U-KLrBxgqGlgVTAkhSbv3gkgC7i4dE7q/view?usp=sharing"
                className="btn btn-outline-secondary btn-sm resumeBtn" role="button" aria-pressed="true">Click Here to Download</a>
            <a href="https://drive.google.com/file/d/1U-KLrBxgqGlgVTAkhSbv3gkgC7i4dE7q/view?usp=sharing" target="_blank" rel="noreferrer" >
                <img className="resumeImg" src={resume} alt="Celina's Resume"></img>
            </a>
        </div>
    )
}


export default Resume;