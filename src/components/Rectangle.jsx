import React from 'react';

export const Rectangle = (props = {}) => {
    const {
        width,
        height,
        pixelRatio,
        color
    } = props;

    const canvas = React.useRef(null);

    React.useLayoutEffect(() => {
        const context = canvas.current.getContext("2d");
        context.fillStyle = color;
        context.fillRect(10, 10, 100, 100);
    });

    const dw = Math.floor(pixelRatio * width);
    const dh = Math.floor(pixelRatio * height);
    const style = { width, height };
    return <canvas ref={canvas} width={dw} height={dh} style={style} />;
};