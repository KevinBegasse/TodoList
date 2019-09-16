import React from 'react';

const TaskCounter = ({ tasksList })  => {
    console.log("compteur", tasksList);
    const counter = tasksList.filter(task => task.done === false).length;
    let message = "";
    
    switch (counter) {
        case 0: 
        message = "Aucune tâche en cours";
        break
        case 1:
        message = "1 tâche en cours";
        break
        default:
        message = `${counter} tâches en cours`;
        
    }
    
    return <div className="taskCounter">
        <h1> {message} </h1>
    </div>
       
};

export default TaskCounter;