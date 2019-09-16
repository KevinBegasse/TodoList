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
      return {
        ...state
      }
    }
    case 'TASK_DONE': {
      console.log('tâche faite');
      console.log(action.value)
      
      return {
        ...state
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
