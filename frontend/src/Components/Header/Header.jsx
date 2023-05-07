import React from 'react'
import './Header.css'
import Nav from "../Nav/Nav";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";

const Header = (props) => {
    // -95px 16px 0
    return (
        <header style={props.nav ? {backgroundImage: `url(${props.image})`, margin: "-95px 16px 0"} : {backgroundImage: `url(${props.image})`, margin: "0 16px"}}>
            <div className="header">
                <div className="header__nav">
                    {/*{props.nav ? <Nav/> : null}*/}
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
                    {props.button ? <PrimaryButton text={props.button}/> : null}
                    {props.secondaryButton ? <SecondaryButton text={props.secondaryButton}/> : null}
                </div>
            </div>
        </header>
    )
}
export default Header
