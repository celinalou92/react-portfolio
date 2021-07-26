import React from 'react';
import resume from '../assets/imgs/resumeJUL.jpg'

function Resume() {
    return (
        <div className="resume">
            <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/18wpXJMldGKJcn8AEQ-0M7Ir-7g9whIJz/view?usp=sharing"
                className="btn btn-outline-secondary btn-sm resumeBtn" role="button" aria-pressed="true">Click Here to Download</a>
            <a href="https://drive.google.com/file/d/18wpXJMldGKJcn8AEQ-0M7Ir-7g9whIJz/view?usp=sharing" target="_blank" rel="noreferrer" >
                <img className="resumeImg" src={resume} alt="Celina's Resume"></img>
            </a>
        </div>
    )
}


export default Resume;