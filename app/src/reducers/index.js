import { 
    FETCH_PERSON_LOADING,
    FETCH_PERSON_SUCCESS,
    FETCH_PERSON_FAIL
} from '../actions/index'

const initialState = {
    person: [],
    isFetching: false,
    error: null  
    
}

 export const reducer = (state = initialState, action) => {
    switch(action.type){
        case(FETCH_PERSON_LOADING):
            return ({
                ...state,
                isFetching: true
            })
        case(FETCH_PERSON_SUCCESS):
            return ({
                ...state,
                person: action.payload,
                isFetching: false
            })
        case(FETCH_PERSON_FAIL):
            return ({
                ...state,
                error: action.payload,
                isFetching: false
            })
    
        default: 
          return state;
    }
}

