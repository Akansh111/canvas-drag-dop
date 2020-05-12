import React from 'react';
import './MyCanvas.css';

export const Rectangle = (props = {}) => {
    const {
        width,
        height,
        color,
        toolbarAction,
        dropTarget = 'rectangle'
    } = props;

    const canvas1 = React.useRef(null);
    const canvas2 = React.useRef(null);

    console.log(toolbarAction, dropTarget)
    React.useLayoutEffect(() => {
        console.log("droptarget", dropTarget);
        if (dropTarget === 'rectangle' && toolbarAction === 'scissor') {
            const context1 = canvas1.current.getContext("2d");
            const context2 = canvas2.current.getContext("2d");
            context1.beginPath();
            context1.fillStyle = color;
            context1.fillRect(10, 10, width, height);
            context1.closePath();

            context2.beginPath();
            context2.fillStyle = color;
            context2.fillRect(10, 10, width, height);
            context2.closePath();

        } else if (dropTarget === 'rectangle' && toolbarAction === 'glue') {
            const context1 = canvas1.current.getContext("2d");
            context1.beginPath();
            context1.fillStyle = color;
            context1.fillRect(10, 10, width, height);
            context1.closePath();
        }

    }, [dropTarget]);

    return (
        <div>
            {
                toolbarAction === 'glue' ?
                    <canvas ref={canvas1} width={width} height={height} /> :
                    toolbarAction === 'scissor' ? 
                        <div className="split-rec">
                            <canvas ref={canvas1} width={width/2} height={height} />
                            <canvas ref={canvas2} width={width/2} height={height} />
                        </div> :
                        ''
            }
        </div>
    )
};