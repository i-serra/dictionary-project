import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props){
if (props.results){
    return (<div className="Results row shadow rounded">
        <div className="col">
        <h1 className="text-capitalize">{props.results.word}</h1>
        </div>
        <div className="col">
        {props.results.meanings.map(function(meaning, index){
            return(<div key={index}>
                <Meaning meaning={meaning} />
            </div>)
        })}
        </div>
        <div className="col-12 phonetics">
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