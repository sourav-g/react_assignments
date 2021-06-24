import React, { useState } from 'react';


const Accordion = ({options}) =>{
    const [currentIndex, setCurrentIndex] = useState(null);

    const onTitleClick = (index) => {
        setCurrentIndex(index);
    }

    const renderedOptions = options.map((option,index)=>{
        return (
            <React.Fragment key={option.title}>
                <div className="title"
                  onClick={(index)=>onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {option.title}
                </div>
                <div className="content ">
                    <p>
                    {option.content}
                    </p>
                </div>
            </React.Fragment>
        )
    })

    return(
        <div>
        <div className="ui styled accordion">
            {renderedOptions}
        </div>    
        <div>{currentIndex}</div>
        </div>
    );
}

export default Accordion;