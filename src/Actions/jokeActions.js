import axios from "axios";

export const Joker = () => {
    return(dispatch) => {
        dispatch(fetchInitial());

        axios.get(`https://v2.jokeapi.dev/joke/Any`)
            .then(response => {
                dispatch(fetchAccomplished(response.data))
            })
            .catch(errors => {
                dispatch(fetchFailure(errors))
            })
    }
}

export const FETCH_INITIAL = "FETCH_INITIAL";

export const fetchInitial = () => {
    return({type: FETCH_INITIAL});
}

export const FETCH_ACCOMPLISHED = "FETCH_ACCOMPLISHED";

export const fetchAccomplished = (Prankster)=> {
    return({type: FETCH_ACCOMPLISHED, payload: Prankster});
}

export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchFailure = (errorMSG)=> {
    return({type: FETCH_FAILURE, payload:errorMSG});
}

export default Joker;