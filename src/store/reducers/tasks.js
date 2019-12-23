import { ADD_TASK, 
         DELETE_TASK, 
         TASK_DONE  
    } from 'src/store/actions';

// On instancie le state par défaut du sous réducer consacré aux tâches
const initialState = [];

// On instancie l'action par défaut
const defaultAction = {};


//Gestion des traitements des différentes action 
const reducer = (state = initialState, action = defaultAction) => {
  switch (action.type) {
    // Gestion de l'ajout d'une tâche
    case ADD_TASK: {
      console.log('ajout tache', action);
      const newTask = {}
      if (state.length > 0) {
      const tasksIds = state.map(task => task.id);
      console.log('taskIds', tasksIds, 'math max', Math.max(...tasksIds));
        newTask.title = action.value,
        // TODO : optimiser l'attribution de l'id, risque que des tâches aient le même id en cas de suppression puis d'ajout
        newTask.id = Math.max(...tasksIds) + 1,
        newTask.done = false
    } else {
        newTask.title = action.value,
        // TODO : optimiser l'attribution de l'id, risque que des tâches aient le même id en cas de suppression puis d'ajout
        newTask.id = 0,
        newTask.done = false
    }
      console.log('newTask', newTask)
      //Tentative de tri des tâches en fonctions de la propriétés done
      const newTaskList = [...state];
      newTaskList.push(newTask);
      //Fonctionne mais revoir la compréhension de la synthaxe de cette ternaire.
      newTaskList.sort(function(a, b){
        return(a.done === false)? 0: a? 1 : -1;
      })
      return newTaskList
    }
    //Gestion de la suppresion d'une tâche
    case DELETE_TASK: {
      console.log('suppression tâche id:', action.value);
      console.log(tasks);
      let updatedTasks = state.tasks;
      // TODO optimiser la méthode de suppresion, splice doit pouvoir s'utiliser de manière plus simple
      for(let i= 0; i <= updatedTasks.length - 1; i ++){
        if(updatedTasks[i].id === action.value) {
          updatedTasks.splice(i, 1);
        }
      }
      console.log('tableau après suppression :',updatedTasks);
      
      return [updatedTasks]
    }
    // Gestion de la validation d'une tâche
    case TASK_DONE: {
      console.log('tâche faite', action.value);
      console.log('state = ', state)
      const newTaskList=[...state];
      newTaskList.map(task => {
       
        if (task.id === action.value){
          console.log('identique', newTaskList, 'spread:', ...newTaskList);
          task.done = !task.done;
          return newTaskList;
        } else {
          return newTaskList;
        }
      });

      //Tentative de tri des tâches en fonctions de la propriétés done
      //Fonctionne mais revoir la compréhension de la synthaxe de cette ternaire.
      newTaskList.sort(function(a, b){
        return(a.done === false)? 0: a? 1 : -1;
      })
            
      return newTaskList;
      /**
       *  TODO : 
       * => trier les tâches en indiquant en premier les tâches restant à effecuter => CHECK
       * => Donner la possibilité de prioriser des tâches
      */

    }
    default: {
        console.log('reducer/tasks/default');
      // return state;
      // Dans le cas où on ne comprend pas quelle est l'action à
      // effecture (action.type n'est pas reconnu), on retourne
      // une copie non-altérée du state courant, reçu en paramètre.
      return [ ...state ];
    }
  }
};

export default reducer;
