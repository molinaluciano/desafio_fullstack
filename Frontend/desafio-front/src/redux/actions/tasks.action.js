import axios from "axios";
import { types } from "../types";

export const fetchTask = () => {
    return async (dispatch) => {
      try {
        
        const { data } = await axios.get();
        console.log("[src][redux][actions][task.actions.js][fetchTask][Data]", JSON.stringify(data));
        dispatch({
          type: types.TASK_FETCH,
          payload: data,
        });
      } catch (error) {
          console.log("[src][redux][actions][task.actions.js][fetchTask][Error]", JSON.stringify(error));
      }
    };
};

export const deleteTask = ({id}) => {
    return async (dispatch) => {
      try {
        
        const { data } = await axios.delete(`/${id}`);
        dispatch(fetchTask())
        console.log("[src][redux][actions][task.actions.js][deleteTask][Data]", JSON.stringify(data));
      } catch (error) {
          console.log("[src][redux][actions][task.actions.js][deleteTask][Error]", JSON.stringify(error));
      }
    };
};

export const updateTask = (task) => {
    return async (dispatch) => {
      try {
        
        const { data } = await axios.put(null, task);       
        dispatch(fetchTask())
        console.log("[src][redux][actions][task.actions.js][updateTask][Data]", JSON.stringify(data));
      } catch (error) {
          console.log("[src][redux][actions][task.actions.js][updateTask][Error]", JSON.stringify(error));
      }
    };
};
export const createTask = (task) => {
    return async (dispatch) => {
      try {
        
        const { data } = await axios.post(null, task);
        dispatch(fetchTask())
        console.log("[src][redux][actions][task.actions.js][createTask][Data]", JSON.stringify(data));
      } catch (error) {
          console.log("[src][redux][actions][task.actions.js][createTask][Error]", JSON.stringify(error));
      }
    };
};

export const setDataModal = (data) => {
    return async (dispatch) => {
     
      dispatch({
        type: types.TASK_SET_DATA_MODAL,
        payload: data,
      });
    };
};

export const setViewModal = (data) => {
  return (dispatch) => {
    dispatch({ type: types.TASK_SET_VIEW_MODAL, payload: data });
  };
};



