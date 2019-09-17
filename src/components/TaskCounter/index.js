import React from 'react';

const TaskCounter = ({ tasksList })  => {
    // Ajout du conteur de tâches qui se base sur le nombre de tâches dont la propriété done indique false via un filter du tableau des tâches
    console.log("compteur", tasksList);
    const counter = tasksList.filter(task => task.done === false).length;
    let message = "";

    // Adaptation du messages en fonction du nombre de tâches restant à effectuer
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

    // Message injecté dans le html
    return <div className="taskCounter">
        <h1> {message} </h1>
    </div>
       
};

export default TaskCounter;