import React from 'react'
import './Cards.css'
const Card = (props) => {
    const { id, username, name, email } = props.robot;
    if(true){
        throw new Error("NOOOOOOOOOOOOO");
    }
    return (
        // <div className='card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <div className='card style'>
            <div className="card-body">
                <img src={`https://robohash.org/${id}?set=set3`} alt={username} />
            </div>
            <div className="card-footer">
                <h3>{name.slice(0, 10)}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;