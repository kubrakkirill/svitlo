import React from 'react'
import {Inscription, Header, Footer, ContactLinks} from '../Components/index'
import '../index.css'
import Nav from "../Components/Nav/Nav";
import headerImage from "../Assets/headerContact.png"

const Contact = () => {
    return (
        <div>
            <Inscription />
            <Nav />
            <Header nav={true} title="Контакти" image={headerImage}/>
            <ContactLinks />
            <Footer />
        </div>
    )
}
export default Contact
