import React from 'react';

export const Triangle = (props = {}) => {
    const {
        width,
        height,
        pixelRatio,
        color
    } = props;

    const canvas = React.useRef(null);

    React.useLayoutEffect(() => {
        const context = canvas.current.getContext("2d");
            var path=new Path2D();
            path.moveTo((width/2)+50,height);
            path.lineTo((width/2),(height)-50);
            path.lineTo((width/2)-50,height);
            context.fillStyle = color;
            context.fill(path);
    });

    const dw = Math.floor(pixelRatio * width);
    const dh = Math.floor(pixelRatio * height);
    const style = { width, height };
    return <canvas ref={canvas} width={dw} height={dh} style={style} />;
};