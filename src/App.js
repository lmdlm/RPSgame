import React, {useRef, useState, useEffect} from 'react';
//import logo from './logo.svg';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import './App.css';
import {drawHand} from "./utilities";
import EnemyChoice from "./EnemyChoice";

//Import pictures and 'fingerpose'
import * as fp from "fingerpose";
import scissors from "./scissors.png";
import rock from "./rock.png";
import paper from "./paper.png";

//Import custom gesture
import {paperGesture} from "./Gestures/Paper";
import {rockGesture} from "./Gestures/Rock";
import {scissorsGesture} from "./Gestures/Scissors";


function App() {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [gest, setGest] = useState(null);
  const images = {scissors:scissors, rock:rock, paper:paper};  

  const [score, setScore] = useState(0);

  const runHandpose = async () =>{
    const net = await handpose.load();
    //console.log("Handpose model loaded");

    //Loop and detect hands
    setInterval(()=>{
      detect(net);
    }, 1000);
  };

  const detect = async (net) =>{
    //Check if data is available
    if (
      typeof webcamRef.current !== "undefined" && 
      webcamRef.current !== null && 
      webcamRef.current.video.readyState === 4 
    ) {
    //Get video properties
    const video = webcamRef.current.video;
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    //Set video height and width
    webcamRef.current.video.width = videoWidth;
    webcamRef.current.video.height = videoHeight;

    //Set canvas height and width
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    //Make detection
    const hand = await net.estimateHands(video);
    //console.log(hand);

    if(hand.length > 0){
      const GE = new fp.GestureEstimator([
        scissorsGesture,
        paperGesture,
        rockGesture
      ]);

      const gesture = await GE.estimate(hand[0].landmarks, 4);      
      if(gesture.gestures !== undefined && gesture.gestures.length > 0){
        //console.log(gesture.gestures);
        const confidence = gesture.gestures.map(
          (prediction) => prediction.confidence
        );
        const maxConfidence = confidence.indexOf(
          Math.max.apply(null, confidence)
        );
        setGest(gesture.gestures[maxConfidence].name);
        //setGest("rock");
        //console.log(gest);
      }
    }
    
    //Draw mesh
    //const ctx = canvasRef.current.getContext("2d");
    //drawHand(hand, ctx);
    }
    
  };

  //Computer choice

  useEffect(() => {runHandpose()},[]);
  
  return (
    
    <div className="App">
      <div><h1>R P S Game</h1></div>    

      <header className="App-header">

      <EnemyChoice myGest={gest} setMyGest={setGest} score={score} setScore={setScore}/>      
        
        <Webcam ref={webcamRef}
          style={{
            position:"absolute",
            marginLeft:"auto",
            marginRight:"auto",
            top:100,
            left:0,
            right:0,
            textAlign:"center",
            zindex:9,
            width:640,
            height:480,
          }} 
        />
        
       <canvas ref={canvasRef}
          style={{
            position:"absolute",
            marginLeft:"auto",
            marginRight:"auto",
            left:0,
            right:0,
            textAlign:"center",
            zindex:9,
            width:320,
            height:240,
          }} 
        /> 
        <div>
        <h1  style={{position:"absolute",
                marginLeft:"auto",
                marginRight:"auto",
                left:1400,
                top:400,
                right:0,
                textAlign:"center",
                height:100,}}>My Choice: {gest}</h1>
        {gest !== null ? <img src={images[gest]} style={{
          position:"absolute",
          marginLeft:"auto",
          marginRight:"auto",
          left:1500,
          bottom:400,
          right:0,
          textAlign:"center",
          height:100,
        }} /> : ("")}
        
        </div>
        
      </header>    
      
    </div>   
  );
}

export default App;
