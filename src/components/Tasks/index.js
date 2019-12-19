import React from 'react';
import { connect } from 'react-redux';

// Local imports
import Task from 'src/components/Task';
import { deletedTask, taskDone } from 'src/store/actions';

/**
 *  Composant de présentation des tâches, il reçoit les props de la methode connect ci dessous et réalise un map de la liste des tâches.
 * Ce map fait ensuite appel au composant Task autant de fois qu'il y a de tâches.
*/


const Tasks = ({ tasksList, deleteTask, handleDone }) => {
    // console.log( "taskList:",tasksList);
    
    return <div>
        {
            tasksList.map(task => {
                // console.log('retour du map :', task);
                return <Task 
                key = {task.id}
                {...task}
                deleteTask={ deleteTask }
                handleDone= {handleDone}
                />
            })
        }
        
        
    </div>
       
};


const TasksContainer = connect(
  // 1er argument : sratégie de lecture du state
    (state, ownProps) => {
        return {
          tasksList: state.tasks
        };
      },
    
      // 2d argument : stratégie d'écriture (dans le state privé global)
      (dispatch, ownProps) => {
        return {
          // handleSubmit: () => {
          //   // const action = { type: 'ADD_TASK', value: event.target.value };
          //   // console.log(action);
          //   dispatch(addTask(event.target.value));
          // },
          deleteTask: (id) => {
            
            // const action = {type: 'DELETE_TASK', value: id};  
            dispatch(deletedTask(id));

          },
          handleDone: (id) => {
            // const action = {type: 'TASK_DONE', value: id}
            dispatch(taskDone(id));
          }
        };
      },
)

export default TasksContainer(Tasks);