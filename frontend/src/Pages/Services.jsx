import React from 'react'
import {Inscription, Header, Footer, ServicesSection, ContactServices} from '../Components/index'
import '../index.css'
import headerImage from "../Assets/servicesHeader.png"
import Nav from "../Components/Nav/Nav";


const Services = () => {
    return (
        <div>
            <Inscription />
            <Nav />
            <Header nav={true}
                    image={headerImage}
                    title="Послуги"/>
            <ServicesSection />
            <ContactServices />
            <Footer />
        </div>
    )
}
export default Services
