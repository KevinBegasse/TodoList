import React from 'react';
import { Icon } from 'semantic-ui-react'

const Task = ({ title, id, done, deleteTask, taskDone }) => {
    const IconClassName = done ? "check circle icon" : "check circle outline icon" ;
    const className = done ? "task done" : "task";

    return <div className={className}>
        <p>{title}</p>
        <i className="trash alternate icon" onClick={deleteTask} value="test"></i>
        <i className={IconClassName} onClick={() => taskDone(id)}></i>
        
  
      
    </div>
       
};




export default Task;