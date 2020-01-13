/**
 * Import
 */
import React from 'react';
import { connect } from 'react-redux';

/**
 * Local import
 */
import { modalAction } from 'src/store/actions';

// Composants enfants éventuels
import Input from 'src/components/Input';
import SaveList from 'src/components/SaveList';
import TaskCounter from 'src/components/TaskCounter';
import Tasks from 'src/components/Tasks';
import Modal from 'src/components/Modal';

// Styles et assets
import './app.sass';

/**
 * Code
 */
const App = ({ title, greeting, handleChange, tasks, displayModal, handleModal }) => (
  <div id="app">
    <h1 id="app-title">{title}</h1>

    {
    displayModal &&
    <Modal modalAction={handleModal}/>
    }
    <Input />
    <SaveList modalAction={handleModal}/>
    <TaskCounter tasksList = {tasks}/>
    <Tasks tasksList={tasks}/>

  </div>
);

/**
 * Export
 */

// Étape 1 : on définit des stratégies de connexion au store de l'app.
const connectionStrategies = connect(
  // 1er argument : stratégie de lecture (dans le state privé global)
  (state, ownProps) => {
    return {
      title: ownProps.title,
      greeting: state.greetingMessage,
      tasks: state.tasks,
      displayModal: state.modal,
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch, ownProps) => {
    return {
      handleModal: () => {      
        console.log('app handle modal')  
        dispatch(modalAction());
      }
      // handleChange: (event) => {
      //   const action = { type: 'UPDATE_INPUT_VALUE', value: event.target.value };
      //   dispatch(action);
      // }
    };
  },
);

// Étape 2 : on applique ces stratégies à un composant spécifique.
const AppContainer = connectionStrategies(App);

// Étape 3 : on exporte le composant connecté qui a été généré
export default AppContainer;
