import React from 'react'

export default function SearchBox(props) {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                onChange={props.onInputChange}
                type="search"
                placeholder='Search robots...' 
                />
        </div>

    )
}
