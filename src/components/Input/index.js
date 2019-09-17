import React from 'react';
import { connect } from 'react-redux';

/**
 * 
 * Composant de présentation des tâches unitaires qui reçoit en props le tableau des tâches destructuré via le spread opérateur {...tasks}
 */

const Input = ({ handleSubmit, inputValue, handleChange }) => {
  // Le form inclu directement le prevent default, par soucis de clareté il serait bon de l'inclure dans la déclaration de la méthode plus bas.
    return <form onSubmit={(event) => {
        event.preventDefault()
        handleSubmit();
    }}
        >
       
        <input className="input" id="input-value" placeholder="Entrez une tâche" value={inputValue} onChange={handleChange} />
    </form>
       
};

const InputContainer = connect(
  // 1er argument : stratégie de lecture du state
    (state, ownProps) => {
        return {
          tasksList: state.tasks,
          inputValue: state.inputValue
        };
      },
    
      // 2d argument : stratégie d'écriture (dans le state privé global)
      (dispatch, ownProps) => {
        return {
          handleSubmit: () => {
            const action = { type: 'ADD_TASK', value: document.querySelector('#input-value').value };
            console.log(action);
            dispatch(action);
          },
          handleChange: () => {
            const action = {type: 'INPUT_CHANGE', value: event.target.value};
            dispatch(action);
          }
        };
      },
)
export default InputContainer(Input);