import React from 'react';
import { Icon } from 'semantic-ui-react'

const Task = ({ title, id, done, deleteTask, handleDone }) => {
    const IconClassName = done ? "check circle icon" : "check circle outline icon" ;
    const className = done ? "task done" : "task";
    console.log('recu par task', title, id, done);

    return <div className={className}>
        <p>{title}</p>
        <i className="trash alternate icon" onClick={ () => deleteTask(id) } value="test"></i>
        <i className={IconClassName} onClick={() => handleDone(id)}></i>
        
  
      
    </div>
       
};




export default Task;