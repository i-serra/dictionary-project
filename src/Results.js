import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props){
if (props.results){
    return (<div className="Results row">
        <div className="col-6">
        <h1>{props.results.word}</h1>
        </div>
        <div className="col-6">
        {props.results.meanings.map(function(meaning, index){
            return(<div key={index}>
                <Meaning meaning={meaning} />
            </div>)
        })}
        </div>
        <div className="col">
        {props.results.phonetics.map(function(phonetic, index){
            return (<div key={index}>
                <Phonetic phonetic={phonetic} />
                    </div>)
        })}
        </div>
    </div>)
} else {
    return null;
}
}