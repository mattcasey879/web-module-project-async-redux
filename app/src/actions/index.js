import axios from 'axios';

export const FETCH_PERSON_LOADING = 'FETCH_PERSON_LOADING';
export const FETCH_PERSON_SUCCESS = 'FETCH_PERSON_SUCCESS';
export const FETCH_PERSON_FAIL = 'FETCH_PERSON_FAIL';


export const getPerson = () => {
    return dispatch => {
        dispatch({type: FETCH_PERSON_LOADING})
        axios.get('https://swapi.dev/api/people/')
        .then(res => {
            console.log(res.data)
            dispatch({type:FETCH_PERSON_SUCCESS,payload:res.data.results[Math.floor(Math.random()*10)]})
        })
        .catch(err=> {
            console.log(err)
            dispatch({type: FETCH_PERSON_FAIL, payload: err.error})
        })
    }
}