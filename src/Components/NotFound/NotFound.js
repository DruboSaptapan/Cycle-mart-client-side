import React from 'react';
import NotFoundPic from './404 Error with a cute animal-bro.svg'

const NotFound = () => {
    return (
        <div>
            <img src={NotFoundPic} alt="" style={{height: '100vh'}} />
        </div>
    );
};

export default NotFound;