import React from 'react'
import './ClientForm.css'

const Search = (props) => {

  const nameChangeHandler = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <div className='control'>
      <hr />
      <input placeholder='Search by name' onChange={nameChangeHandler}></input>
    </div>
  )
}

export default Search