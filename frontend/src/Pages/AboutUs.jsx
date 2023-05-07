import React from 'react'
import {Inscription, Header, Footer, Info, AboutUsCardSection} from '../Components/index'
import '../index.css'
import imageHeader from '../Assets/aboutHeader.png'
import imageCard1 from "../Assets/aboutInfoCard1.png";
import imageCard2 from "../Assets/aboutInfoCard2.png";
import imageHeaderBottom from "../Assets/aboutHeaderBottom.png";

const AboutUs = () => {
    return (
        <div>
            <Inscription />
            <Header nav={true} title="Про нас" image={imageHeader} padding="17% 0 20%"/>
            <Info title="Ми - молода команда професіоналів, яка займається розробкою та управлінням Svitlo Space"
                  text="Наші засновниці - три незламні дівчини, які зрозуміли важливість робочого простору,
                  який стимулює та надихає на творчість.
                  Ми почали свою діяльність в 2022 році з метою створення найкращого коворкінгу в місті.
                  У нашій команді працюють талановиті фахівці з різних галузей, які мають різні знання та досвід.
                  Ми об'єднуємося, щоб створити простір, де наші клієнти можуть працювати, навчатися та спілкуватися."
                  button="Записатися на захід"
                  secondaryButton="перейти до галереї"
                  data={[
                      {
                          tag: '#svitlo.space',
                          title: 'Ми відкриті🥳 ...',
                          img: imageCard1
                      },
                      {
                          tag: '#svitlo.space',
                          title: `Лабораторний 7 - ЖК Alter Ego ...`,
                          img: imageCard2
                      },
                      {
                          tag: '#svitlo.space',
                          title: 'Ми відкриті🥳 ...',
                          img: imageCard1
                      }
                  ]}/>
            <AboutUsCardSection />
            <Header image={imageHeaderBottom}
                    title="На нашому коворкінгу ми дбаємо про те, щоб наші
                    клієнти почували себе комфортно та продуктивно" text="Ми пропонуємо не тільки робочі місця,
                    але й можливість зустрітися з цікавими людьми та поглибити свої знання в різних сферах.
                    Ми віримо в те, що робота може бути не тільки ефективною, але й приємною, тому намагаємося забезпечити нашим
                    клієнтам найкращі умови для творчості та досягнення мети.
                    Приєднйтесь до нашої спільноти та зробіть свій робочий день більш якісним та продуктивним!"
                    button="Забронювати місце"
                    secondaryButton="актуальні заходи"/>
            <Footer />
        </div>
    )
}
export default AboutUs
