import { initialState } from "./todoReducer";
import { apiType } from "../actions/apiTodo";

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case apiType.FETCH_TODO_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        todoList: action.payload,
      };
    case apiType.FETCH_TODO_DATA_UNSUCCESS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default apiReducer;
