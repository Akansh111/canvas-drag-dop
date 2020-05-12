import React from 'react';

export const Triangle = (props = {}) => {
    const {
        width,
        height,
        toolbarAction,
        dropTarget = 'triangle',
        color
    } = props;

    const canvas1 = React.useRef(null);
    const canvas2 = React.useRef(null);

    React.useLayoutEffect(() => {
        if (dropTarget === 'triangle' && toolbarAction === 'scissor') {
            const context1 = canvas1.current.getContext("2d");
            const context2 = canvas2.current.getContext("2d");

            let path=new Path2D();
            path.moveTo((width/2)+50,height);
            path.lineTo((width/2),(height)-50);
            path.lineTo((width/2)-50,height);
            context1.fillStyle = color;
            context1.fill(path);

            let path1=new Path2D();
            path1.moveTo((width/4),(height/2)+25);
            path1.lineTo(0,(height/2)+25);
            path1.lineTo(0,(height/2)-25);
            context2.fillStyle = color;
            context2.fill(path1);

        } else if (dropTarget === 'triangle' && toolbarAction === 'glue') {
            const context = canvas1.current.getContext("2d");
            var path=new Path2D();
            path.moveTo((width/2)+50,height);
            path.lineTo((width/2),(height)-50);
            path.lineTo((width/2)-50,height);
            context.fillStyle = color;
            context.fill(path);
        }
    }, [width, height, color, dropTarget]);

    return (
        <div>
            {
                toolbarAction === 'glue' ?
                    <canvas ref={canvas1} width={width} height={height} /> :
                    toolbarAction === 'scissor' ? 
                        <div className="split-triangle">
                            <canvas ref={canvas1} width={width/2} height={height} />
                            <canvas ref={canvas2} width={width} height={height} />
                        </div> :
                        ''
            }
        </div>
    )
};