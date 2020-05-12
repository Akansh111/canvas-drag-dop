import React , {useEffect} from 'react';
import { Rectangle } from './Rectangle';
import { Circle } from './Circle';
import { Triangle } from './Triangle';
import './MyCanvas.css';
import { Toolbar } from './Toolbar';
import canvasJson from '../assets/canvas.json';

export const MyCanvas = (props) => {
      
   useEffect(()=>{
    fetch(canvasJson, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }}).then((response) => response.json()).then((data)=>{
        console.log(data)
       })
   },[])

   const onDragStart=(ev,id)=>{
    console.log(ev,id)
   ev.dataTransfer.setData("id",id)
}

 const  onDragOver = (ev) => {
    ev.preventDefault();
}
const onDrop = (ev, cat) => {
    console.log(ev)
    ev.preventDefault();  
}
   
    return (
        <div className="my-canvas">
            <div className="rectangle-container">
                <Rectangle width={200}  height={200} pixelRatio={window.devicePixelRatio} color={'#ed7d31'}  onDragOver={(event)=>onDragOver(event)} onDrop={(event)=>onDrop(event, "Done")}/>
            </div>
            <div className="circle-container">
                <Circle width={200}  height={200} pixelRatio={window.devicePixelRatio} color={'#ffc003'} onDragOver={(event)=>onDragOver(event)} />
            </div>
            <div className="traingle-container">
                <Triangle width={200}  height={200} pixelRatio={window.devicePixelRatio} color={'#70ad47'} onDragOver={(event)=>onDragOver(event)}/>
            </div>
            <Toolbar onDragStart={(ev, name)=>onDragStart(ev,name)} ></Toolbar>
        </div>     
    )
  };