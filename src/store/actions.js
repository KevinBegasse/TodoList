// ------- Actions types

export const INPUT_CHANGE = 'action/task/INPUT';
export const ADD_TASK = 'action/task/ADD';
export const DELETE_TASK = 'action/task/DELETE';
export const TASK_DONE = 'action/task/DONE'



// ------- Action creators

// Action Creator pour la création d'une tâche 
export const inputChange = (inputValue) => {
    return {
        type : INPUT_CHANGE,
        value : inputValue, 
    }
}
export const addTask = (content) => {
    return {
        type: ADD_TASK,
        value  : content,
    } 
}

export const deletedTask = (content) => {
    return {
        type: DELETE_TASK,
        value: content,
    }
}

export const taskDone = (content) => {
    return {
        type: TASK_DONE,
        value : content,
    }
}