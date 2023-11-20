import React from 'react'

const Locationinfo = ({ info }) => {
    return (
        <div className='location-info'>
            <h2>Event Location</h2>
            <li>ID:<strong>{info.id}</strong></li>
            <li>TITLE:<strong>{info.title}</strong></li>
        </div>
    )
}

export default Locationinfo