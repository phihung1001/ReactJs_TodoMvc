export const ADD_TODO = ' ADD_TODO'
export const GET_TODO_EDIT_ID = 'GET_TODO_EDIT_ID'
export const ON_EDIT_TODO = 'ON_EDIT_TODO'
export const MARK_COMPLETED = 'MARK_COMPLETED'
export const CHECK_ALL_TODO = 'CHECK_ALL_TODO'
export const SET_STATUS_FILTER = 'SET_STATUS_FILTER'
export const CLEAR_COMPLETED ='CLEAR_COMPLETED'
export const REMOVE_TODO ='REMOVE_TODO'
export const INDEX_TODO ='INDEX_TODO'

export const addTodo = ( todo = {}) => {
    return {
        todo,
        type: ADD_TODO
    }
}
export const getTodoEditId = ( id = -1) => {
    console.log('edit',id);
    return {
        id,
        type: GET_TODO_EDIT_ID
    }
}
export const onEditTodo = (  todo = {},id =-1) => {
    return {
        todo,
        id,
        type: ON_EDIT_TODO
    }
}

export const markCompleted = ( id = '') => {
    console.log('mark',id);
    return {
        id,
        type: MARK_COMPLETED
    }
}
export const checkAllTodo = () => {
    return {
        type: CHECK_ALL_TODO
    }
}
export const setStatusFilter = (status ='')  => {
    console.log('status',status);
    return {
        status,
        type: SET_STATUS_FILTER
    }
}

export const clearCompleted = ()  => {
    return {
        type: CLEAR_COMPLETED
    }
}

export const removeTodo = ( id ='')  => {
    return {
        id,
        type: REMOVE_TODO
    }
}

export const indexTodo = ()  => {
    return {
        type: INDEX_TODO
    }
}