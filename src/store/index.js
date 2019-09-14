// La librairie redux s'occupe de nous fournir un système de
// gestion d'état (state management). Il n'est pas question ici
// de React !
import { createStore } from 'redux';

import reducer from 'src/store/reducer';

// On crée LE store de CETTE application. Un castor sympa :)
const kastore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default kastore;
