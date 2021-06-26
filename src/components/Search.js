import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () =>{
    const [term, setTerm] = useState('javascript');
    const [results, setResults] = useState([]);
    
    const URL = 'https://en.wikipedia.org/w/api.php';

    useEffect(()=>{
        const timeoutid = setTimeout(()=>{
            if(term){
                (async ()=>{
                    const {data} = await axios.get(URL,{
                        params :{
                            action : 'query',
                            list : 'search',
                            format : 'json',
                            origin : '*',
                            srsearch : term
                        }
                    });
                    
                    setResults(data.query.search);
                })();
            }
        },1000);

        //this function is invoked just before the next useEffect hook execution
        return ()=>{
            clearTimeout(timeoutid);
        }
        
    },[term])

    const renderedResults = results.map((result)=>{
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a className="ui button"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <div>
                        <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" 
                       value={term}
                       onChange={(e) => setTerm(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;