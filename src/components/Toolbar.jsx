import React from 'react';
import glue from '../assets/glue.svg';
import eraser from '../assets/eraser.svg';
import scissor from '../assets/scissor.svg';
import './MyCanvas.css';

export const Toolbar = (props = {}) => {
    return (
        <div className="my-toolbar">
           <img
            src={scissor}
            alt="A Scissor" 
            height="45px"
            width="45px" 
            // draggable={true}
        />
           <img src={eraser} alt="An Eraser" height="45px" width="45px" />
           <img src={glue} alt="A Glue" height="45px" width="45px" />
        </div>
    )
  };

