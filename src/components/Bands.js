import React from 'react'
const Bands = (props) => {
    const array = props.bands.map((band, index) => {return <li key={index}>{band.name}</li>})
     return (
        <div>
            {array}
        </div>
     )
}
export default Bands