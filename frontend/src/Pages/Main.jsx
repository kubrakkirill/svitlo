import {Inscription, Header, Contact, Special, Questions, Footer, Info} from '../Components/index'
import '../index.css'
import React from 'react'
import image from '../Assets/header2.svg'
import imageCard1 from "../Assets/image-of-card-1.jpg";
import imageCard2 from "../Assets/image-of-2-card.jpg";
import Nav from "../Components/Nav/Nav";

const Main = () => {
    return (
        <div>
            <Inscription />
            <Nav />
            <Header nav={true} title="Svitlo Space – "
                    titleText="твій затишний простір для роботи і відпочинку"
                    text="Ми допоможемо підібрати індивідуальний офіс під ваші потреби!"
                    button="Забронювати місце"
                    image={image}/>
            <Info title="Ми знаємо, що вам потрібно – світло, інтернет та простір для ефективної роботи."
                  text="Хочете працювати в креативному середовищі, зустрічатися з цікавими людьми
                            та розвиватися в своєму бізнесі? Ми пропонуємо вам унікальний коворкінг - місце,
                            де поєднуються зручність, комфорт та інновації.

                            Svitlo Space – коворкінгу на Печерську, який дозволить вам відчути себе комфортно
                            та надасть можливість зосереджено працювати.

                            Ми також пропонуємо бомбосховище, щоб ви могли бути в безпеці. Ми гарантуємо повну
                            конференційність особистих даних за потреби та індивідуальний підхід до кожного клієнта."
                  button="Забронювати місце"
                  data={[
                      {
                      tag: '#svitlo.space',
                      title: 'Світлина нашого простору з нагадуванням, що перемога буде за нами!',
                      img: imageCard1
                      },
                      {
                      tag: '#svitlo.space',
                      title: 'Чекаємо на тебе!',
                      img: imageCard2
                      },
                      {
                      tag: '#svitlo.space',
                      title: 'Світлина нашого простору з нагадуванням, що перемога буде за нами!',
                      img: imageCard1
                      },
                      {
                          tag: '#svitlo.space',
                          title: 'Чекаємо на тебе!',
                          img: imageCard2
                      },
                      {
                          tag: '#svitlo.space',
                          title: 'Світлина нашого простору з нагадуванням, що перемога буде за нами!',
                          img: imageCard1
                      }
                      ]}/>
            <Contact />
            <Special />
            <Questions />
            <Footer />
        </div>
    )
}
export default Main
