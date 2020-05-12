import React from 'react';

export const Circle = (props = {}) => {
    const {
        width,
        height,
        pixelRatio,
        color
    } = props;

    const canvas = React.useRef(null);

    React.useLayoutEffect(() => {
        const context = canvas.current.getContext("2d");
        context.beginPath();
        context.arc(width / 2, height / 2, width / 3, 0, Math.PI * 2);
        context.fillStyle = color;
        context.fill();
    });

    const dw = Math.floor(pixelRatio * width);
    const dh = Math.floor(pixelRatio * height);
    const style = { width, height };
    return <canvas ref={canvas} width={dw} height={dh} style={style} />;
};