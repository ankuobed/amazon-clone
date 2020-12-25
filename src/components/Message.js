import React from 'react';

const Message = ({ children, variant }) => {
    return (
        <div className={`alert alert-${variant || 'info'}`}>
            { children }
        </div>
    )
}

export default Message
