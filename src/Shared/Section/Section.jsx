import React from 'react';




const Section = ({title}) => {
    return (
        <div className='w-3/4 mx-auto text-center my-10'>
            <div className="divider divider-secondary text-3xl md:text-4xl my-2 italic font-semibold text-info">{title}</div> 
        </div>
    );
};

export default Section;