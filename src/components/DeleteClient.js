import React from 'react'

const DeleteClient = (props) => {

    const removeClient = (id) => {
        props.onDelete(id);
    }
    return (
        <button onClick={() => removeClient(props.id)}>Delete</button>
    )
}

export default DeleteClient