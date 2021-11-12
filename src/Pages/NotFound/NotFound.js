import React from 'react';
import notFound from '../../images/notFound/404-not-found.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={notFound} style={{width:'100%',height:'80%'}} alt="" />
        </div>
    );
};

export default NotFound;