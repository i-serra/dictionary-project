import React from "react";
import "./Photos.css";

export default function Photos(props){
    console.log(props.photos)
    if (props.photos){
        return (
            <div className="Photos">
                 <div className="row"> 
                {props.photos.map(function(photo, index){
                    return (
                            <div className="col-12">
                    <a href={photo.src.original} rel="nonreferer nonopener" target="_blank" key={index}>
                        <img src={photo.src.tiny} className="shadow rounded"/>
                    </a>
                    </div>
                    
                    )
                })}
                </div>
                </div>
            
        )
    } else {
        return null;
    }
}