import React from 'react';

const Dedline = ({dedline}) => {
    return (
        <div className='DeadlineContainer'>
            <p>Дедлайн</p>
            <p>{dedline}</p>
        </div>
    );
};

export default Dedline;