import React from 'react'
import './EventsList.css'
import image1 from '../../Assets/image1.png'
import image2 from '../../Assets/image2.png'
import image3 from '../../Assets/image3.png'
import image4 from '../../Assets/image4.png'
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";


const EventsList = () => {

    const data =[
        {
            id: 1,
            title: 'майстер-класи',
            link: 'Перейти до календарю',
            image: image1,
        },
        {
            id: 2,
            title: 'Презентації книжок',
            link: 'Перейти до календарю',
            image: image2,
        },
        {
            id: 3,
            title: 'Благодійні заходи',
            link: 'Перейти до календарю',
            image: image3,
        },
        {
            id: 4,
            title: 'Групи психологічної підтримки',
            link: 'Перейти до календарю',
            image: image4,
        },
    ]

    return (
        <div className="events-list">
            <section className="events-list__container">
                <div className="events-list__title">
                    <h4>У нас в коворкінгу можна відвідувати різні заходи:</h4>
                    <p>майстер-класи з різних галузей, презентації книжок, благодійні заходи
                        на підтримку потребуючих, групи психологічної підтримки та багато іншого.</p>
                </div>
                {data.map((item)=>{
                    return(
                        <article key={item.id} style={{backgroundImage: `url(${item.image})`}}>
                            <div className="events-list__item-content">
                                <p>{item.title}</p>
                                <div className="events-list__item-link">
                                    {item.link}
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.04166 14.5H22.9583" stroke="#F0F0F0" strokeWidth={1.20833} strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M14.5 6.04175L22.9583 14.5001L14.5 22.9584" stroke="#F0F0F0" strokeWidth={1.20833} strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </article>
                    )
                })}
                <div className="events-list__buttons">
                    <PrimaryButton text="Календар заходів"/>
                    <SecondaryButton text="Контакти"/>
                </div>
            </section>
        </div>
    )
}
export default EventsList
