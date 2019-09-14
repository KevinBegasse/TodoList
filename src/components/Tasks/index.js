import React from 'react';

// Local imports
import Task from 'src/components/Task';

const Tasks = (props) => {
    const tasksList = props.taskList;
    return <div>
        {
            tasksList.map(task => {
                console.log(task);
                return <Task 
                key = {task.id}
                {...task}
                />
            })
        }
        
        
    </div>
       
};

export default Tasks;