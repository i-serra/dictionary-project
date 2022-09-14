import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response){
    setResults(response.data[0]);
    }

    function search(event){
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
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
    </div>
}
