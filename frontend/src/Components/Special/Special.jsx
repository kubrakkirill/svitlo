import React from 'react'
import './Special.css'

const Special = () => {

    const data =[
        {
            title: 'Погодонний тариф',
            text: 'Для тих, хто шукає гнучкість в часі та не потребує довготривалого перебування в коворкінг',
            price: '100 грн/год',
            color: '#D2D2D2',
        },
        {
            title: 'Поденний тариф',
            text: 'Це ідеальний варіант для тих, хто хоче спробувати працювати в коворкінгу та отримати від нього максимальну користь',
            price: '500 грн/день',
            color: '#EFEAE7',
        },
        {
            title: 'Тижневий абонемент',
            text: 'Дозволяє клієнту отримати доступ до нашого простору протягом семи днів',
            price: '2500 грн/тижд',
            color: '#687D6B',
        },
        {
            title: 'Десятиденний абонемент',
            text: 'Дає можливість використовувати коворкінг на протязі 10 днів',
            price: '4500 грн',
            color: '#EFEAE7',
        },
        {
            title: 'Місячний абонемент',
            text: 'Дає можливість користуватись послугами коворкінгу на протязі одного місяця',
            price: '10000 грн',
            color: '#D2D2D2',
        },
        {
            title: '“Командний”',
            text: 'В рамках "командного" абонементу ми можемо запропонувати спеціальні умови щодо розміщення робочих місць',
            price: 'Індивідуально',
            color: '#474E54',
        },
    ]

    return (
        <div className="special">
            <section className="special__container">
                <div className="special__title">
                    <h4>Для IT компаній ми пропонуємо індивідуальні умови</h4>
                    <p>А також спеціальні пропозиції під проведення стратегічних сесій, майстер класів, трансформаційних та бізнес ігор.
                        <br/>
                        <br/>
                        Наш коворкінг є також локацією для ваших івентів.</p>
                </div>
                <div className="special__items">
                    {/*{*/}
                    {/*    data.map(({title, text, price, color}, index) =>{*/}
                    {/*        return(*/}
                    {/*            <article key={index} style={(color === '#687D6B' || color === '#474E54') ? {backgroundColor: color, color: "white"} : {backgroundColor: color}}>*/}
                    {/*                <p>{title}</p>*/}
                    {/*                <small>{text}</small>*/}
                    {/*                <div className="price">*/}
                    {/*                    {price}*/}
                    {/*                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                        <path d="M6.04166 14.5H22.9583" stroke="#303030" strokeWidth={1.20833} strokeLinecap="round" strokeLinejoin="round"/>*/}
                    {/*                        <path d="M14.5 6.04175L22.9583 14.5001L14.5 22.9584" stroke="#303030" strokeWidth={1.20833} strokeLinecap="round" strokeLinejoin="round"/>*/}
                    {/*                    </svg>*/}
                    {/*                </div>*/}
                    {/*            </article>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}
                    <article style={(data[0].color === '#687D6B' || data[0].color === '#474E54') ? {backgroundColor: data[0].color, color: "white"} : {backgroundColor: data[0].color}}>
                        <p>{data[0].title}</p>
                        <small>{data[0].text}</small>
                        <div className="price">
                            {data[0].price}
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.04166 14.5H22.9583" stroke="#303030" strokeWidth={1.20833} strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14.5 6.04175L22.9583 14.5001L14.5 22.9584" stroke="#303030" strokeWidth={1.20833} strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </article>
                    <article style={(data[1].color === '#687D6B' || data[1].color === '#474E54') ? {backgroundColor: data[1].color, color: "white"} : {backgroundColor: data[1].color}}>
                        <p>{data[1].title}</p>
                        <small>{data[1].text}</small>
                        <div className="price">
                            {data[1].price}
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.04166 14.5H22.9583" stroke="#303030" strokeWidth={1.20833} strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14.5 6.04175L22.9583 14.5001L14.5 22.9584" stroke="#303030" strokeWidth={1.20833} strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </article>
                </div>
                <div className="special__items">
                    <article style={(data[2].color === '#687D6B' || data[0].color === '#474E54') ? {backgroundColor: data[2].color, color: "white"} : {backgroundColor: data[2].color}}>
                        <p>{data[2].title}</p>
                        <small>{data[2].text}</small>
                        <div className="price">
                            {data[2].price}
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.04166 14.5H22.9583" stroke="#FFFFFF" strokeWidth={1.20833} strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14.5 6.04175L22.9583 14.5001L14.5 22.9584" stroke="#FFFFFF" strokeWidth={1.20833} strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </article>
                    <article style={(data[3].color === '#687D6B' || data[3].color === '#474E54') ? {backgroundColor: data[3].color, color: "white"} : {backgroundColor: data[3].color}}>
                        <p>{data[3].title}</p>
                        <small>{data[3].text}</small>
                        <div className="price">
                            {data[3].price}
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.04166 14.5H22.9583" stroke="#303030" strokeWidth={1.20833} strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14.5 6.04175L22.9583 14.5001L14.5 22.9584" stroke="#303030" strokeWidth={1.20833} strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </article>
                </div>
                <div className="special__items">
                    <article style={(data[4].color === '#687D6B' || data[4].color === '#474E54') ? {backgroundColor: data[4].color, color: "white"} : {backgroundColor: data[4].color}}>
                        <p>{data[4].title}</p>
                        <small>{data[4].text}</small>
                        <div className="price">
                            {data[4].price}
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.04166 14.5H22.9583" stroke="#303030" strokeWidth={1.20833} strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14.5 6.04175L22.9583 14.5001L14.5 22.9584" stroke="#303030" strokeWidth={1.20833} strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </article>
                    <article style={(data[5].color === '#687D6B' || data[5].color === '#474E54') ? {backgroundColor: data[5].color, color: "white"} : {backgroundColor: data[5].color}}>
                        <p>{data[5].title}</p>
                        <small>{data[5].text}</small>
                        <div className="price">
                            {data[5].price}
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.04166 14.5H22.9583" stroke="#FFFFFF" strokeWidth={1.20833} strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14.5 6.04175L22.9583 14.5001L14.5 22.9584" stroke="#FFFFFF" strokeWidth={1.20833} strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}
export default Special
