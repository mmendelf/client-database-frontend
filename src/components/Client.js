import React from 'react'
import DeleteClient from './DeleteClient'


const Client = (props) => {

    return (
        <div>
            <h2>name: {props.name}</h2>
            <h2>id: {props.id}</h2>
            <h2>ip: {props.ip}</h2>
            <h2>phone: {props.phone}</h2>
            <DeleteClient onDelete={props.onDelete} id={props._id} />
            <hr />
        </div>
    )
}

export default Client