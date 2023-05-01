import React from 'react'
import './Info.css'
import PrimaryButton from "../Button/PrimaryButton";
import image1 from '../../Assets/image-of-card-1.jpg'
import image2 from '../../Assets/image-of-2-card.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper";

const data = [
    {
        tag: '#svitlo.space',
        title: 'Світлина нашого простору з нагадуванням, що перемога буде за нами!',
        img: image1
    },
    {
        tag: '#svitlo.space',
        title: 'Чекаємо на тебе!',
        img: image2
    },
    {
        tag: '#svitlo.space',
        title: 'Світлина нашого простору з нагадуванням, що перемога буде за нами!',
        img: image1
    }
]
const Info = () => {
    return (
        <div className="info">
            <section className="info__container">
                <h4>
                    Ми знаємо, що вам потрібно – світло, інтернет та простір для ефективної роботи.
                </h4>
                <div className="info__content">
                    <div className="info__content-text">
                        <p>
                            Хочете працювати в креативному середовищі, зустрічатися з цікавими людьми
                            та розвиватися в своєму бізнесі? Ми пропонуємо вам унікальний коворкінг - місце,
                            де поєднуються зручність, комфорт та інновації.
                            <br/>
                            <br/>
                            Svitlo Space – коворкінгу на Печерську, який дозволить вам відчути себе комфортно
                            та надасть можливість зосереджено працювати.
                            <br/>
                            <br/>
                            Ми також пропонуємо бомбосховище, щоб ви могли бути в безпеці. Ми гарантуємо повну
                            конференційність особистих даних за потреби та індивідуальний підхід до кожного клієнта.
                        </p>
                        <PrimaryButton text='Забронювати місце'/>
                    </div>
                    <Swiper
                        navigation={true}
                        spaceBetween={-37}
                        slidesPerView={2}
                        modules={[Navigation]}
                        className="info__content-cards">
                        {
                            data.map(({tag, title, img}, index) => {
                                return(
                                    <SwiperSlide key={index}>
                                        <div className="info__content-card">
                                            <small>{tag}</small>
                                            <p>{title}</p>
                                            <div className="info__content-card-image">
                                                <img src={img} alt="table"/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </section>
        </div>
    )
}
export default Info
