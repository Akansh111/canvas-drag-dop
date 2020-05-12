import React from 'react';

export const Circle = (props = {}) => {
    const {
        width,
        height,
        color,
        toolbarAction,
        dropTarget = 'circle',
    } = props;

    const canvas1 = React.useRef(null);
    const canvas2 = React.useRef(null);

    React.useLayoutEffect(() => {
        if (dropTarget === 'circle' && toolbarAction === 'scissor') {
            const context1 = canvas1.current.getContext("2d");
            const context2 = canvas2.current.getContext("2d");

            context1.beginPath();
            context1.arc(width / 2, height / 2, width / 3, 0, Math.PI * 2);
            context1.fillStyle = color;
            context1.fill();

            context2.beginPath();
            context2.arc(0, height / 2, width / 3, 0, Math.PI * 2);
            context2.rotate(45 * Math.PI/180);
            context2.fillStyle = color;
            context2.fill();
        } else if (dropTarget === 'circle' && toolbarAction === 'glue') {
            const context1 = canvas1.current.getContext("2d");
            context1.beginPath();
            context1.arc(width / 2, height / 2, width / 3, 0, Math.PI * 2);
            context1.fillStyle = color;
            context1.fill();
        }
        
    }, [width, height, color, dropTarget]);

    return (
        <div>
            {
                toolbarAction === 'glue' ?
                    <canvas ref={canvas1} width={width} height={height} /> :
                    toolbarAction === 'scissor' ? 
                        <div className="split-circle">
                            <canvas ref={canvas1} width={width/2} height={height} />
                            <canvas ref={canvas2} width={width} height={height} />
                        </div> :
                        ''
            }
        </div>
    )
};