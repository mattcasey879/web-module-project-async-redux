import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import {getPerson} from '../actions'
import '../App.css'
const Person = (props) => {
    const {person, error, isFetching} = props
    useEffect(() => {
        props.getPerson()
    },[]);


    if (error) {
        return (<div class="alert alert-danger" role="alert">
        {error}
      </div>)
    }

    if(isFetching) {
        return (<div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>)
    }

    const handleClick = () => {
        props.getPerson()
    }
    return (
        <div>
            <h3>The force is with: </h3>
                <h4>{person.name}</h4>
            <button class="btn btn-secondary" onClick={handleClick}>Get new Galaxy Explorer</button>
        </div>

    )
}
const mapStatetoProps = (state) =>{
    return{
        person: state.person,
        isFetching: state.isFetching,
        error: state.error
    
    }
}

export default connect(mapStatetoProps,{getPerson})(Person);