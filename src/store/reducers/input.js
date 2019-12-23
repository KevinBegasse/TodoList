import tasks from 'src/components/datas/tasks'

import { INPUT_CHANGE, INPUT_RESET } from 'src/store/actions';

// On instancie le state par défaut du sous réducer consacré aux tâches
const initialState = "";

// On instancie l'action par défaut
const defaultAction = {};


//Gestion des traitements des différentes action 
const reducer = (state = initialState, action = defaultAction) => {
  switch (action.type) {
    // Gestion du refresh de l'input après soumission, l'input prend la valeur de l'action transmise par la methode onChange
    case INPUT_CHANGE: {
      return action.value
    }
    case INPUT_RESET: {
      return action.value
    }
    default: {
        console.log('reducer/input/default');
      // return state;
      // Dans le cas où on ne comprend pas quelle est l'action à
      // effecture (action.type n'est pas reconnu), on retourne
      // une copie non-altérée du state courant, reçu en paramètre.
      return state;
    }
  }
};

export default reducer;
