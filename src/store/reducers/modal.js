import { DISPLAY_MODAL } from 'src/store/actions';

// On instancie le state par défaut du sous réducer consacré aux tâches
const initialState = false;

// On instancie l'action par défaut
const defaultAction = {};


//Gestion des traitements des différentes action 
const reducer = (state = initialState, action = defaultAction) => {
  switch (action.type) {
    // Gestion du refresh de l'input après soumission, l'input prend la valeur de l'action transmise par la methode onChange
    case DISPLAY_MODAL: {
      console.log('reducer modal')
      return state = !statew;
    }
    default: {
        console.log('reducer/modal/default');
      // return state;
      // Dans le cas où on ne comprend pas quelle est l'action à
      // effecture (action.type n'est pas reconnu), on retourne
      // une copie non-altérée du state courant, reçu en paramètre.
      return state;
    }
  }
};

export default reducer;