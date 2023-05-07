import React from 'react'
import './Info.css'
import PrimaryButton from "../Button/PrimaryButton";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper";


const Info = (props) => {

    return (
        <div className="info">
            <section className="info__container">
                <h4>
                    {props.title}
                </h4>
                <div className="info__content">
                    <div className="info__content-text">
                        <p>
                            {props.text}
                        </p>
                        <PrimaryButton text={props.button}/>
                    </div>
                    <Swiper
                        navigation={true}
                        spaceBetween={-37}
                        slidesPerView={2}
                        modules={[Navigation]}
                        className="info__content-cards">
                        {
                            props.data.map(({tag, title, img}, index) => {
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
