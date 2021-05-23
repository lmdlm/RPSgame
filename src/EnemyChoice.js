import App from "./App"
import React, {useRef, useState, useEffect} from 'react';
import scissors from "./scissors.png";
import rock from "./rock.png";
import paper from "./paper.png";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

const EnemyChoice = ({myGest, score, setMyGest, setScore}) => {
    
    const images = {scissors:scissors, rock:rock, paper:paper};
    const [enemyGest, setEnemyGest] = useState("");
    const [playerWin, setPlayerWin] = useState("");
    
    const newEnemyGest = () => {
        const choices = ["scissors", "rock", "paper"];
        setEnemyGest(choices[Math.floor(Math.random() * 3)]);    
    };

    useEffect( () => {
        newEnemyGest();
    }, []);

    const Result=()=>{
        if(myGest==="rock" && enemyGest==="scissors"){
            setPlayerWin("win");
            setScore(score+1);
        }
        else if(myGest==="rock" && enemyGest==="paper"){
            setPlayerWin("lose");
            setScore(score-1);
        }
        else if(myGest==="scissors" && enemyGest==="paper"){
            setPlayerWin("win");
            setScore(score+1);
        }
        else if(myGest==="scissors" && enemyGest==="rock"){
            setPlayerWin("lose");
            setScore(score-1);
        }
        else if(myGest==="paper" && enemyGest==="rock"){
            setPlayerWin("win");
            setScore(score+1);
        }
        else if(myGest==="paper" && enemyGest==="scissors"){
            setPlayerWin("lose");
            setScore(score-1);
        }
        else{
            setPlayerWin("draw");
        }
    }

    useEffect( () => {
        Result();
    }, [enemyGest]);

    useEffect( () => {
        newEnemyGest();
    }, [myGest]);
    

    return (
        
        <div style={{
            position:"absolute",
            marginLeft:"auto",
            marginRight:"auto",
            left:100,
            top:400,
            right:1200,
            textAlign:"center",
            height:100,
          }} >
             
             <div>
             <h1 style={{position:"absolute",
                marginLeft:"auto",
                marginRight:"auto",
                left:400,
                top:0,
                right:1000,
                textAlign:"center",
                height:100,}}>Computer Choice: {enemyGest}</h1>
                {enemyGest !== null ? <img src={images[enemyGest]} style={{
                position:"absolute",
                marginLeft:"auto",
                marginRight:"auto",
                left:400,
                top:400,
                right:1000,
                textAlign:"center",
                height:100,
                }} /> : ("")}
            </div>
                         
            <div style={{position:"absolute",
                marginLeft:"auto",
                marginRight:"auto",
                left:1100,
                top:200,
                bottom:0,
                right:1,
                textAlign:"center",
                height:100,}}>
                Result: 
                {playerWin=="win" && <h2>YOU WIN!</h2>}
                {playerWin=="lose" && <h2>YOU LOSE!</h2>}
                {playerWin=="draw" && <h2>DRAW!</h2>}

            </div>
            <div style={{position:"absolute",
                color: "grey",
                marginLeft:"auto",
                marginRight:"auto",
                left:1100,
                top:600,
                bottom:0,
                right:1,
                textAlign:"center",
                height:100,}}>
                Score: {score}
            </div>
        </div>
           
    )
}

export default EnemyChoice;
