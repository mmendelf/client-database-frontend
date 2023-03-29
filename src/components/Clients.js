import React, { useState, useEffect } from 'react'

import Client from './Client';

const Clients = (props) => {

    const [clients, setClients] = useState([]);

    useEffect(() => {
        setClients(props.data);
    }, [props.data])


    return (
        <div>
            {clients?.map((client, index) => (
                <Client
                    onDelete={props.onDelete}
                    key={index}
                    name={client.name}
                    id={client.id}
                    ip={client.ip}
                    phone={client.phone}
                />
            ))}
        </div>
    );
}

export default Clients