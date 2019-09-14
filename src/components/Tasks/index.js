import React from 'react';
import { connect } from 'react-redux';

// Local imports
import Task from 'src/components/Task';

const Tasks = ({ tasksList }) => {
    console.log( "taskList:",tasksList);
    
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


const TasksContainer = connect(
    (state, ownProps) => {
        return {
          tasksList: state.tasks
        };
      },
    
      // 2d argument : stratégie d'écriture (dans le state privé global)
      (dispatch, ownProps) => {
        return {
          handleSubmit: () => {
            const action = { type: 'ADD_TASK', value: event.target.value };
            console.log(action);
            dispatch(action);
          }
        };
      },
)

export default TasksContainer(Tasks);