import React from "react";
import "./Phonetic.css";

export default function Phonetic(props){
    let audio = new Audio(props.phonetic.audio)

    function start(){
        audio.play();
    }

    return <div className="Phonetic">
        <a href="#0" onClick={start}><i className="fa-solid fa-microphone"></i></a>
        <span className="phonetic-text">{props.phonetic.text}</span>
    </div>
}