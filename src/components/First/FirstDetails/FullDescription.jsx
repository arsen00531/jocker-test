import React from 'react';
import imageDescription from '../../../images/desccription.png'
const FullDescription = ({fullDescription}) => {
    return (
        <div className='FullDescription'>
            <div className="FullDescription-top">
                <p>Описание</p>
                <img src = {imageDescription} alt="" />
            </div>
            <p className='FullDescriptionBottom'>
                {fullDescription}
            </p>
        </div>
    );
};

export default FullDescription;