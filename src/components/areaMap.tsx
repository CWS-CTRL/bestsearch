import React, { useRef, useEffect } from "react";

import { changeLoadingAction } from "../store/module/search";
import { useAppDispatch } from "../store";
import debounce from "../utils/debounce";

interface SE {
    startX: string,
    startY: number,
    endX: string,
    endY: number
}

interface areaMapType {
    parInfo: HTMLDivElement | undefined
    data: any[]
    SE: SE
}

//面积图
function draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, data: any[], parInfo: HTMLDivElement, SE: SE) {
    const width = parInfo?.clientWidth;
    const height = width / 2;
    const len = data.length;
    const { startX, startY, endX, endY } = SE;
    const maxY = data.reduce((pre, item) => Math.max(pre, item.sv), -Infinity);

    canvas.width = width;
    canvas.height = height;

    ctx.strokeStyle = "rgb(138,159,223,0.3)";
    ctx.fillStyle = "rgb(138,159,223,0.3)";
    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.lineTo(0, height - (startY / maxY) * height);
    ctx.lineTo(width, height - (endY / maxY) * height);
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.stroke();
    ctx.fill();

    ctx.strokeStyle = "rgb(138,159,223,1)";
    ctx.fillStyle = "rgb(138,159,223,1)";
    ctx.beginPath();
    ctx.moveTo(0, height);
    for (let i = 0; i < len; i++) {
        ctx.lineTo(width / (len - 1) * i, height - (data[i].sv / maxY) * height);
    }
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.stroke();
    ctx.fill();
}

function AreaMap(props: areaMapType) {
    const { data, parInfo, SE } = props;
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
    const dispatch = useAppDispatch();

    useEffect(function () {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            canvasCtxRef.current = canvas.getContext("2d");
            if (canvasCtxRef.current && parInfo) {
                draw(canvas, canvasCtxRef.current, data, parInfo, SE);

                // 页面尺寸发生变化时重新绘制面积图
                window.addEventListener("resize", debounce(function () {
                    if (canvasCtxRef.current && parInfo) {
                        draw(canvas, canvasCtxRef.current, data, parInfo, SE);
                        dispatch(changeLoadingAction(true));
                    }
                }, 500))
            }
        }
    }, [parInfo, canvasRef.current, canvasCtxRef.current])

    return <canvas ref={canvasRef}></canvas>
}

export default AreaMap;