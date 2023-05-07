import React from 'react'
import './Header.css'
import Nav from "../Nav/Nav";
import PrimaryButton from "../Button/PrimaryButton";

const Header = (props) => {

    return (
        <header>
            <div className="header-image">
                <img src={props.image} alt="Header"/>
            </div>
            <div className="header">
                {props.nav ? <Nav/> : null}
                <div className="header__main">
                    <h3>
                        {props.title}
                        <br/>
                        {props.titleText}
                    </h3>
                    <h6>
                        {props.text}
                    </h6>
                    <PrimaryButton text={props.button}/>
                </div>
            </div>
        </header>
    )
}
export default Header
