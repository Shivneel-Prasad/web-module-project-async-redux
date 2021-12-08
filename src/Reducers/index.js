import { FETCH_INITIAL, FETCH_FAILURE, FETCH_ACCOMPLISHED } from "../Actions/jokeActions";

const initialState = {
    Prankster: {
        category: '',
        setup: '',
        delivery: ''
    },
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case(FETCH_INITIAL):
        return({
          ...state,
          Prankster: {},
          isFetching:true,
          error:''
        });
      case(FETCH_ACCOMPLISHED):
        return({
          ...state,
          Prankster: action.payload,
          isFetching: false,
          error: ''
        });
      case(FETCH_FAILURE):
        return({
          ...state,
          Prankster:{},
          isFetching: false,
          error: action.payload
        })
      default:
        return state;
    }
  };