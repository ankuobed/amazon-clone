import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Loading = () => {
    return (
        <div className='loading'>
            <CircularProgress color='inherit' />
        </div>
    )
}

export default Loading;
