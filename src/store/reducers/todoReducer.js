import {
    ADD_TODO,
    GET_TODO_EDIT_ID,
    ON_EDIT_TODO,
    MARK_COMPLETED,
    CHECK_ALL_TODO,
    SET_STATUS_FILTER,
    CLEAR_COMPLETED,
    REMOVE_TODO,
} from '../actions/index'

import { isNotCheckAll } from '../../helpers/todoHelper'
import { filterBystatus} from '../../helpers/todoHelper'

export const initialState = {
    todoList : [],
    todoEditId:'',
    nameEdit:'',
    isCheckAll: false,
    status: 'ALL',
    numOfTodoLeft: 1
}
const todosReducer = (state = initialState, action) => {
    const { todoList ,todoEditId, isCheckAll, status} = state
    const list = JSON.parse(JSON.stringify(todoList))
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todoList: [...list,action.todo],
                numOfTodoLeft : filterBystatus(todoList,'ACTIVE').length
            })
        case GET_TODO_EDIT_ID:
            if(action.id >=0) {
                const todo = todoList.find(todo => action.id === todo.id);
            }
            return Object.assign({}, state, {
                todoEditId: action.id
               // nameEdit: todo.name
            })
        case ON_EDIT_TODO:
            if( action.id >= 0) {
                todoList.splice(action.id, 1, action.todo)
            }
            return Object.assign({}, state, {
                todoList : list,
                //todoEditId :''
            
            })
        case MARK_COMPLETED:
            const updatedList = todoList.map(todo =>  todo.id ===action.id ? ({...todo, isCheck: !todo.isCheck}) : todo )
            return Object.assign({}, state, {
                todoList : updatedList,
                isCheckAll : !isNotCheckAll(updatedList),
                numOfTodoLeft : filterBystatus(todoList,'ACTIVE').length
            })
        case CHECK_ALL_TODO:
            return Object.assign({}, state, {
                todoList : todoList.map(todo => ({...todo ,isCheck: !isCheckAll})),
                isCheckAll : !isCheckAll,
                numOfTodoLeft : filterBystatus(todoList,'ACTIVE').length
            })
        case SET_STATUS_FILTER:
            return Object.assign({}, state, {
                status: action.status,
                todoList : filterBystatus(todoList,status)
            })
        case CLEAR_COMPLETED:
            return Object.assign({}, state, {
                todoList : filterBystatus(todoList,'ACTIVE'),
                numOfTodoLeft : filterBystatus(todoList,'ACTIVE').length
            })
        case REMOVE_TODO:
            return Object.assign({}, state, {
                todoList : filterBystatus(todoList,'REMOVE',action.id),
                numOfTodoLeft : filterBystatus(todoList,'ACTIVE').length
            })
        default:
            return state
    }
}
export default todosReducer