import React from 'react';
import { Rectangle } from './Rectangle';
import { Circle } from './Circle';
import { Triangle } from './Triangle';
import './MyCanvas.css';

export const MyCanvas = (props = {}) => {
    return (
        <div className="my-canvas">
            <div className="rectangle-container">
                <Rectangle width={100}  height={100} pixelRatio={window.devicePixelRatio} color={'#ed7d31'} />
            </div>
            <div className="circle-container">
                <Circle width={100}  height={100} pixelRatio={window.devicePixelRatio} color={'#ffc003'} />
            </div>
            <div className="traingle-container">
                <Triangle width={100}  height={100} pixelRatio={window.devicePixelRatio} color={'#70ad47'} />
            </div>
        </div>
    )
  };

