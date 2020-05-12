import React, { useState } from 'react';
import { Rectangle } from './Rectangle';
import { Circle } from './Circle';
import { Triangle } from './Triangle';
import './MyCanvas.css';
import { Toolbar } from './Toolbar';
import canvasJson from '../assets/json/canvas.json';


export const MyCanvas = () => {
    const [initialTarget, setInitialTarget] = useState('glue');
    const [dropTarget, setDropTarget] = useState();

    const onDragStart = (ev, targetId) => {
        setInitialTarget(targetId)
        ev.dataTransfer.setData("id", targetId)
    }

    const onDrop = (event, targetObj) => {
        setDropTarget(targetObj)
    }
    const onDragOver = (event) => {
        event.preventDefault()
    }


    return (
        <div className="my-canvas">
            <div className="rectangle-container" onDragOver={(event) => onDragOver(event)} onDrop={(event) => { onDrop(event, 'rectangle') }}>
                <Rectangle 
                    width={canvasJson.canvasDimensions.rectangle.width} 
                    height={canvasJson.canvasDimensions.rectangle.height} 
                    color={canvasJson.canvasDimensions.rectangle.color} 
                    toolbarAction={initialTarget} 
                    dropTarget={dropTarget}
                />
            </div>
            <div className="circle-container" onDragOver={(event) => onDragOver(event)} onDrop={(event) => { onDrop(event, 'circle') }} >
                <Circle 
                    width={canvasJson.canvasDimensions.circle.width} 
                    height={canvasJson.canvasDimensions.circle.height} 
                    pixelRatio={window.devicePixelRatio} 
                    color={canvasJson.canvasDimensions.circle.color} 
                    toolbarAction={initialTarget} 
                    dropTarget={dropTarget}
                />
            </div>
            <div className="traingle-container" onDragOver={(event) => onDragOver(event)} onDrop={(event) => { onDrop(event, 'triangle') }} >
                <Triangle 
                    width={canvasJson.canvasDimensions.triangle.width} 
                    height={canvasJson.canvasDimensions.triangle.height} 
                    pixelRatio={window.devicePixelRatio} 
                    color={canvasJson.canvasDimensions.triangle.color} 
                    toolbarAction={initialTarget} 
                    dropTarget={dropTarget}
                />
            </div>
            <Toolbar onDragStart={(ev, name) => onDragStart(ev, name)} ></Toolbar>
        </div>
    )
};