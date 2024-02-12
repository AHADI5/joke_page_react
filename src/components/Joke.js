import React from "react";

export default function Joke({setUp, Punchline ,age ,isTrue }) {
    return (
        <div className="joke1">
            <h1>Joke</h1>
           {setUp && <div >  setUp : {setUp}</div>}
            <div className="punchline">Punchline : {Punchline}</div>
            <hr/>
        </div>
    )
}