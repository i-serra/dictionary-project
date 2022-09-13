import React from "react";

export default function Phonetic(props){
    let audio = new Audio(props.phonetic.audio)

    function start(){
    audio.play()
    }

    return <div className="Phonetic">
        <a href="#0" onClick={start}><i className="fa-solid fa-microphone"></i></a>
         {props.phonetic.text}
    </div>
}