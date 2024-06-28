import { getData } from "../../API/todoData";

export const apiType = {
  FETCH_TODO_DATA_SUCCESS: "FETCH_TODO_DATA_SUCCESS",
  FETCH_TODO_DATA_UNSUCCESS: "FETCH_TODO_DATA_UNSUCCESS",
};

export const fetchTodoDataSuccess = (data) => ({
  type: apiType.FETCH_TODO_DATA_SUCCESS,
  payload: data,
});

export const fetchTodoDataUnsuccess = (error) => ({
  type: apiType.FETCH_TODO_DATA_UNSUCCESS,
  payload: error,
});

export const fetchTodoData = async () => {
  return await getData()
    .then((response) => {
      return {
        type: apiType.FETCH_TODO_DATA_SUCCESS,
        payload: response.data,
      };
    })
    .catch((error) => {
      return {
        type: apiType.FETCH_TODO_DATA_UNSUCCESS,
        payload: error.message,
      };
    });
};
