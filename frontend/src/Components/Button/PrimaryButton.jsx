import React from 'react'
import './Button.css'

const PrimaryButton = (props) => {
    return (
        <button type="button" className="primary-button button">
            {props.text}
        </button>
    )
}
export default PrimaryButton
