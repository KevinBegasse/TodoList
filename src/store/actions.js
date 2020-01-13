// ------- Actions types

export const INPUT_CHANGE = 'action/input/CHANGE';
export const INPUT_RESET = 'action/input/RESET'
export const ADD_TASK = 'action/task/ADD';
export const DELETE_TASK = 'action/task/DELETE';
export const TASK_DONE = 'action/task/DONE';
export const DISPLAY_MODAL = 'action/modal/DISPLAY';




// ------- Action creators

//Action Creator pour la modification de l'input
export const inputChange = (inputValue) => {
    return {
        type : INPUT_CHANGE,
        value : inputValue, 
    }
}

//Action Creator pour le reset de l'input
export const inputReset = () => {
    return {
        type : INPUT_RESET,
        value : "",
    }
}

// Action Creator pour la création d'une tâche 
export const addTask = (content) => {
    return {
        type: ADD_TASK,
        value  : content,
    } 
}

// Action Creator pour la suppression d'un tâche
export const deletedTask = (content) => {
    return {
        type: DELETE_TASK,
        value: content,
    }
}

//Action Creator pour la réalisation d'une tâche
export const taskDone = (content) => {
    return {
        type: TASK_DONE,
        value : content,
    }
}

//Action Creator pour l'ouverture de la modal
export const modalAction = () => {
    console.log('dans action js')
    return {
        type : DISPLAY_MODAL,
    }
}