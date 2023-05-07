import React from 'react'
import './Header.css'
import Nav from "../Nav/Nav";
import PrimaryButton from "../Button/PrimaryButton";

const Header = (props) => {

    return (
        <header style={{backgroundImage: `url(${props.image})`}}>
            {/*<div className="header-image">*/}
            {/*    <img src={props.image} alt="Header"/>*/}
            {/*</div>*/}
            <div className="header">
                <div className="header__nav">
                    {props.nav ? <Nav/> : null}
                </div>
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
