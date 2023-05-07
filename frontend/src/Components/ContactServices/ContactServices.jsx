import React from 'react'
import './ContactServices.css'
import PrimaryButton from "../Button/PrimaryButton";

const ContactServices = () => {
    return (
        <div className="contact-services">
            <section className="contact-services__container">
                <p>Зверніться до нас, і ми з радістю проконсультуємо вас!</p>
                <PrimaryButton text="контакти"/>
            </section>
        </div>
    )
}
export default ContactServices
