import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState (null);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos)
    }

    function search(event){
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f91700001000001eae3385777fb41069da5285ffe625d31";
        let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return <div className="Dictionary">
        <form className="text-center" onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} className="shadow"/>
            <a href="#0" onClick={search}><i className="fa-solid fa-magnifying-glass search-button"></i></a>
        </form>
         <Results results={results} />
         <Photos photos={photos} />
    </div>
}
