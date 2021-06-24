import React from 'react';
import Accordion from './components/Accordion';

const options = [
    {
        title:'ICC World Test Championship',
        content:'New Zealand won the inaugral edition'
    },
    {
        title:'ICC World Cup',
        content:'England winner in last edition'
    },
    {
        title:'ICC T20 World Cup',
        content:'West Indies winner in last edition'
    }
]

const App = () =>{

    return (
        <div>
            <Accordion options={options}/>
        </div>
    )
}

export default App;