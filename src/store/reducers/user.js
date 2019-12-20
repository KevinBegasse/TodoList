import tasks from 'src/components/datas/tasks'

import { INPUT_CHANGE, ADD_TASK, DELETE_TASK, TASK_DONE  } from 'src/store/actions';

// On instancie le state par défaut
const initialState = {};

// On instancie l'action par défaut
const defaultAction = {};


//Gestion des traitements des différentes action 
const reducer = (state = initialState, action = defaultAction) => {
  switch (action.type) {
    
    default: {
    console.log('reducer/user/default');
    return { ...state };
    }
  }
};

export default reducer;
