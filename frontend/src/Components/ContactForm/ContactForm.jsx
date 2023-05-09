import React, {useState} from 'react'
import './ContactForm.css'
import PrimaryButton from "../Button/PrimaryButton";

const ContactForm = () => {
    const checkbox = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="16" height="16" rx="3" stroke="#687D6B" stroke-width="2"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M14.3443 6.57289C14.6388 6.25037 14.6286 5.75363 14.3212 5.44344V5.44344C13.9913 5.11052 13.4498 5.12161 13.1338 5.46776L8.41077 10.6412C8.03727 11.0503 7.40236 11.0778 6.99486 10.7026L4.70246 8.59163C4.35318 8.27 3.80567 8.30678 3.50254 8.67223V8.67223C3.22082 9.01188 3.25446 9.51266 3.57907 9.81158L7.65737 13.5671C7.73263 13.6364 7.8506 13.6284 7.91592 13.5497L8.02437 13.4189C8.03365 13.4077 8.05055 13.407 8.06077 13.4173V13.4173C8.07067 13.4273 8.08692 13.427 8.09641 13.4166L14.3443 6.57289Z" fill="#687D6B"/>
    </svg>;
    const emptyCheckbox = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="16" height="16" rx="3" stroke="#687D6B" stroke-width="2"/>
    </svg>;

    const [checked, setChecked] = useState(false);

    const check = () => {
        setChecked(!checked);
    };

    return (
        <div className="contact-form">
            <section className="contact-form__container">
                <h4>Надіслати нам повідомлення</h4>
                <form>
                    <div className="form-item">
                        <label htmlFor="name" className="form-item-label">ФІО</label>
                        <input type="text" name="name" placeholder="Яременко Марія Васильївна" required/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="phone" className="form-item-label">Номер телефону</label>
                        <input type="text" name="phone" placeholder="+380" required/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="email" className="form-item-label">E-mail</label>
                        <input type="email" name="email" placeholder="yaremenko@gmail.com" required/>
                    </div>
                    <div className="form-item form-item-textarea">
                        <label htmlFor="message" className="form-item-label form-item-label-textarea">Повідомлення</label>
                        <textarea name="message" rows="5" required></textarea>
                    </div>
                </form>
                <div className="contact-form__personal">
                    <div onClick={check}>
                        {checked ? checkbox : emptyCheckbox}
                    </div>
                    <a href="#">Згоден на <small>обробку персональних даних</small></a>
                </div>
                <PrimaryButton text="Відправити повідомлення"/>
            </section>
        </div>
    )
}
export default ContactForm
