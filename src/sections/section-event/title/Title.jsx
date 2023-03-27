import React from 'react'
import './Title.css'

function Title({ title }) {
    return (
        <div>
            <p className='title'>{title}</p>
            <hr />
        </div>
    )
}

export default Title