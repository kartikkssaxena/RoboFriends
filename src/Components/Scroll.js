import React from 'react'

export default function Scroll(props) {
    return (
        <div style={{ overflow: 'scroll', border: '5px solid black', height: '2500px' }}>
            {props.children}
        </div>
    )
}
