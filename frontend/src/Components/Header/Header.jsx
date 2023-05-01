import React from 'react'
import './Header.css'
import image from '../../Assets/header.jpg'
import Nav from "../Nav/Nav";
import PrimaryButton from "../Button/PrimaryButton";

const Header = () => {
    return (
        <header className="header">

            <Nav/>
            <div className="header__main">
                <h3>
                    Svitlo Space – <br/>
                    твій затишний простір для роботи і відпочинку
                </h3>
                <h6>
                    Ми допоможемо підібрати індивідуальний офіс під ваші потреби!
                </h6>
                <PrimaryButton text='Забронювати місце'/>
            </div>
            <div className="header-image">
                <img src={image} alt="Header"/>
            </div>
        </header>
    )
}
export default Header
