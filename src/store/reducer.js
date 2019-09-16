import tasks from 'src/components/datas/tasks'


const initialState = {
  greetingMessage: 'Bonjour depuis le store !',
  tasks: tasks,
  
};

const defaultAction = {};

const reducer = (state = initialState, action = defaultAction) => {
  switch (action.type) {
    case 'ADD_TASK': {
      console.log('ajout tache');
      const tasksIds = state.tasks.map(task => task.id);
      const newTask= {
        title: action.value,
        id: Math.max(...tasksIds) + 1,
        done: false
      }
      console.log(newTask)
      return {
      ...state,
      tasks: [...state.tasks, newTask]
      }
    }
    case 'DELETE_TASK': {
      console.log('suppression tâche id:', action.value);
      console.log(tasks);
      let updatedTasks = state.tasks;
      for(let i= 0; i <= updatedTasks.length - 1; i ++){
        if(updatedTasks[i].id === action.value) {
          updatedTasks.splice(i, 1);
        }
      }
      console.log('tableau après suppression :',updatedTasks);
      return {
        ...state,
        tasks: [...updatedTasks]
        
      }
    }
    case 'TASK_DONE': {
      console.log('tâche faite', action.value);
      const taskDone = state.tasks.map(task => {
        if (task.id === action.value){
          task.done = !task.done;
          return task;
        } else {
          return task;
        }
      });
            
      return {
        ...state,
        tasks: taskDone
        
      }
    }
    default: {
      // return state;
      // Dans le cas où on ne comprend pas quelle est l'action à
      // effecture (action.type n'est pas reconnu), on retourne
      // une copie non-altérée du state courant, reçu en paramètre.
      return { ...state };
    }
  }
};

export default reducer;
