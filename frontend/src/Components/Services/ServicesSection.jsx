import React from 'react'
import './Services.css'
import SecondaryButton from "../Button/SecondaryButton";

const ServicesSection = () => {

    const data = [
        {
            id: 1,
            title: "Погодинний тариф",
            list: ["- гнучкість у використанні; ",
                "- працювання у зручний для вас час; ",
                "- єффективне використання свого часу та ресурсів."],
            price: "100 грн/год",
            background: "#EFEAE7"
        },
        {
            id: 2,
            title: "Поденний тариф",
            list: ["- можливість насолоджуватись простором цілий день;",
                "- ідеальний варіант для тих, хто хоче спробувати працювати в коворкінгу та отримати від нього максимальну користь;"],
            price: "500 грн/день",
            background: "#687D6B"
        },
        {
            id: 3,
            title: "Тижневий абонемент",
            list: ["- дозволяє клієнту отримати доступ до нашого простору протягом семи днів; ",
                "- можливість не турбуватися про необхідність щодня бронювати своє місце та займатися налаштуванням робочого простору - заощаджує ваш час та спрощує процес роботи;"],
            price: "2500 грн/тижд",
            background: "#D2D2D2"
        },
        {
            id: 4,
            title: "Десятиденний абонемент",
            list: ["- дає можливість використовувати коворкінг на протязі 10 днів; ",
                "- це дозволяє уникнути постійної адаптації до нової обстановки та зосередитись на своїх завданнях;"],
            price: "4500 грн",
            background: "#687D6B"
        },
        {
            id: 5,
            title: "Місячний абонемент",
            list: ["- дозволяє клієнту отримати доступ до нашого простору протягом місяця ;",
                "- це дозволить ефективно використовувати свій час та підвищувати свою продуктивність;"],
            price: "10000 грн/місяць",
            background: "#D2D2D2"
        },
        {
            id: 6,
            title: "Командний",
            list: ["- спеціальні умови щодо розміщення робочих місць, оренди обладнання, а також забезпечення необхідною технічною інфраструктурою; ",
                "- максимальний комфорт і ефективність роботи;"],
            price: "Індивідуально",
            background: "#474E54"
        },
    ]

    return (
        <div className="services">
            <section className="services__container">
                <h4>Ми пропонуємо різноманітні тарифи та абонементи, які задовольнять потреби будь-якого клієнта</h4>
                {data.map((item) => {
                    return(
                        <article key={item.id}>
                            <p style={(item.background === '#687D6B' || item.background === '#474E54') ? {backgroundColor: item.background, color: "white"} : {backgroundColor: item.background}}>{item.title}</p>
                            <div className="services__card-content">
                                <small>
                                    <ul>
                                        {item.list.map((listItem) => {
                                            return(
                                                <li>{listItem} <br/><br/></li>
                                           )
                                        })}
                                    </ul>
                                </small>
                                <div className="services__card-content-price">
                                    <small><strong>{item.price}</strong></small>
                                    <SecondaryButton text="Забронювати" width="180px"/>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}
export default ServicesSection
