import React from 'react';

const Task = ({ title, id, done }) => {
    
    const className = done ? "task done" : "task";
    return <div className={className}>
        <p>{title}</p>
    </div>
       
};

export default Task;