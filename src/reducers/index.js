//import actions
import {
  FETCHING_API_SUCCESS,
  FETCHING_API_FAILURE,
  FETCHING_API_LOADING,
  SEARCH_VALUE,
} from "../actions";
import initialState from "../states/initialState";

//create reducer taking in state, initialState, action
export const appReducer = (state = initialState, action) => {
  //initializer of switch cases taking in action and type from dispatch located in main index.js
  switch (action.type) {
    case FETCHING_API_LOADING: {
      //console.log("FETCH RUNNING THROUGH REDUCER");
      return { ...state, loading: true };
    }
    case FETCHING_API_SUCCESS: {
      //console.log("FETCH SUCCESS IS RUNNING IN REDUCER")
      return {
        ...state,
        loading: false,
        fetchedItem: action.payload,
      };
    }
    case FETCHING_API_FAILURE: {
      console.log("FETCH NO JOY FROM REDUCER");
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case SEARCH_VALUE: {
      //console.log('SEARCH VALUE RECEIVED IN REDUCER', action.payload)
      return {
        ...state,
        searchValue: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
