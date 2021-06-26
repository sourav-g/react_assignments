import React, { useState } from 'react';


const Accordion = ({options}) =>{
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    //TODO : Understand working of -> onClick={()=>onTitleClick(index)}
    
    const renderedOptions = options.map((option,index)=>{
        const active = index === activeIndex ? 'active':'';
        return (
            <React.Fragment key={option.title}>
                <div className={`title ${active}`}
                  onClick={()=>onTitleClick(index)}> 
                    <i className="dropdown icon"></i>
                    {option.title}
                </div>
                <div className={`content ${active}`}>
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
        </div>
    );
}

export default Accordion;