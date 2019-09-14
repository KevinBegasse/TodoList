import React from 'react';
import { connect } from 'react-redux';

const Input = ({ handleSubmit }) => {
    return <form onSubmit={(event) => {
        event.preventDefault()
        handleSubmit();
    }}
        >
        <input className="input" id="input-value" placeholder="Entrez une tâche"/>
    </form>
       
};

const InputContainer = connect(
    (state, ownProps) => {
        return {
          tasksList: state.tasks
        };
      },
    
      // 2d argument : stratégie d'écriture (dans le state privé global)
      (dispatch, ownProps) => {
        return {
          handleSubmit: () => {
            const action = { type: 'ADD_TASK', value: document.querySelector('#input-value').value };
            console.log(action);
            dispatch(action);
          }
        };
      },
)
export default InputContainer(Input);