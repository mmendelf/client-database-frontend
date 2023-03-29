import React, { useState } from 'react';
import './ClientForm.css'


const ClientForm = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredID, setEnteredID] = useState('');
    const [enteredIP, setEnteredIP] = useState('');
    const [enteredPhone, setEnteredPhone] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };
    const idChangeHandler = (event) => {
        setEnteredID(event.target.value);
    };
    const ipChangeHandler = (event) => {
        setEnteredIP(event.target.value);
    };
    const phoneChangeHandler = (event) => {
        setEnteredPhone(event.target.value);
    };


    const submitHandler = (event) => {
        const newClient = {
            name: enteredName,
            id: enteredID,
            ip: enteredIP,
            phone: enteredPhone
        };
        props.onAdd(event, newClient)

    };



    return (
        <form onSubmit={submitHandler}>
            <div className='controls'>
                <div className='control'>
                    <label>name</label>
                    <input type='text' placeholder='name' required onChange={nameChangeHandler} />
                </div>
                <div className='control'>
                    <label>id</label>
                    <input type='text' placeholder='id'  pattern="[0-9]{9}" title='Enter only 9 numbers' required onChange={idChangeHandler} />
                </div>
                <div className='control'>
                    <label>ip</label>
                    <input type='text' placeholder='ip' required onChange={ipChangeHandler} />
                </div>
                <div className='control'>
                    <label>phone</label>
                    <input type='tel' placeholder='phone' required onChange={phoneChangeHandler} />
                </div>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    );
};

export default ClientForm;