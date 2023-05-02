import React from 'react'
import './Button.css'

const SecondaryButton = (props) => {
    return (
        <button type="button" className="secondary-button button">
            {props.text}
        </button>
    )
}
export default SecondaryButton
