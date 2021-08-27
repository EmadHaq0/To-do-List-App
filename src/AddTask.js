import React from 'react'
import './AddTask.css'

const AddTask = (props) => {
    const addMainTask = () => {
        props.setAdding(!props.adding)
    }
    return(
        <div className="add-task-btn">
            <button className="AddEventButton" onClick={addMainTask}>+</button>
        </div> 
    );
}

export default AddTask