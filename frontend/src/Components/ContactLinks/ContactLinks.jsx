import React from 'react'
import './ContactLinks.css'
import {ContactForm} from "../index";

const ContactLinks = () => {

    const data = [
        {
            id: 1,
            svg: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42 20C42 34 24 46 24 46C24 46 6 34 6 20C6 15.2261 7.89642 10.6477 11.2721 7.27208C14.6477 3.89642 19.2261 2 24 2C28.7739 2 33.3523 3.89642 36.7279 7.27208C40.1036 10.6477 42 15.2261 42 20Z" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24 26C27.3137 26 30 23.3137 30 20C30 16.6863 27.3137 14 24 14C20.6863 14 18 16.6863 18 20C18 23.3137 20.6863 26 24 26Z" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            ,
            link: "https://www.google.com/maps/place/%D0%96%D0%B8%D1%82%D0%BB%D0%BE%D0%B2%D0%B8%D0%B9+%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81+Alter+Ego/@50.4273684,30.525969,15z/data=!4m6!3m5!1s0x40d4cf1adb1eea59:0xb4c14c52e0a29b68!8m2!3d50.4273684!4d30.525969!16s%2Fg%2F11g8bwzss1",
            text: `Наша адреса: м. Київ, Лабораторний провулок 7, ЖК "Альтер Его".`,
        },
        {
            id: 2,
            svg: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.9999 33.8402V39.8402C44.0021 40.3972 43.888 40.9485 43.6649 41.4589C43.4417 41.9692 43.1145 42.4274 42.704 42.8039C42.2936 43.1805 41.809 43.4672 41.2814 43.6456C40.7537 43.8241 40.1946 43.8903 39.6399 43.8402C33.4855 43.1715 27.5739 41.0685 22.3799 37.7002C17.5475 34.6295 13.4505 30.5325 10.3799 25.7002C6.99982 20.4826 4.89635 14.5422 4.23987 8.36019C4.18989 7.80713 4.25562 7.24971 4.43287 6.72344C4.61012 6.19717 4.89501 5.71357 5.2694 5.30344C5.64379 4.8933 6.09948 4.56561 6.60745 4.34124C7.11542 4.11686 7.66455 4.00072 8.21987 4.00019H14.2199C15.1905 3.99064 16.1314 4.33435 16.8674 4.96726C17.6033 5.60017 18.084 6.47909 18.2199 7.44019C18.4731 9.36033 18.9428 11.2456 19.6199 13.0602C19.889 13.776 19.9472 14.554 19.7877 15.302C19.6282 16.0499 19.2576 16.7364 18.7199 17.2802L16.1799 19.8202C19.027 24.8273 23.1728 28.9731 28.1799 31.8202L30.7199 29.2802C31.2636 28.7425 31.9502 28.3719 32.6981 28.2124C33.446 28.0529 34.224 28.1111 34.9399 28.3802C36.7544 29.0573 38.6397 29.5269 40.5599 29.7802C41.5314 29.9173 42.4187 30.4066 43.0529 31.1552C43.6872 31.9038 44.0242 32.8593 43.9999 33.8402Z" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            ,
            link: "tel:+380670000000",
            text: "+380 (67) 000 00 00",
        },
        {
            id: 3,
            svg: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM20.0086 28.8815L31.1369 18.839C31.6253 18.4055 31.0303 18.1941 30.3819 18.5873L16.6473 27.2523L10.7147 25.4007C9.4335 25.0084 9.4243 24.128 11.0023 23.4951L34.1203 14.5809C35.1762 14.1015 36.1953 14.8345 35.7922 16.4505L31.8552 35.0031C31.5803 36.3215 30.7837 36.6368 29.68 36.0278L23.6827 31.5969L20.8 34.4C20.4651 34.7256 20.2 35 19.6 35L20.0086 28.8815Z" fill="white"/>
            </svg>
            ,
            link: "https://t.me/svitlospace",
            text: "Telegram:@svitlospace",
        },
        {
            id: 4,
            svg: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8H40C42.2 8 44 9.8 44 12V36C44 38.2 42.2 40 40 40H8C5.8 40 4 38.2 4 36V12C4 9.8 5.8 8 8 8Z" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M44 12L24 26L4 12" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            ,
            link: "mailto:svitlo.space.pro@gmail.com",
            text: "svitlo.space.pro@gmail.com",
        },
        {
            id: 5,
            svg: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0019 24C16.0019 19.5819 19.5827 15.9994 24.001 15.9994C28.4193 15.9994 32.0019 19.5819 32.0019 24C32.0019 28.4181 28.4193 32.0006 24.001 32.0006C19.5827 32.0006 16.0019 28.4181 16.0019 24ZM11.6768 24C11.6768 30.8064 17.1943 36.3237 24.001 36.3237C30.8076 36.3237 36.3252 30.8064 36.3252 24C36.3252 17.1936 30.8076 11.6763 24.001 11.6763C17.1943 11.6763 11.6768 17.1936 11.6768 24ZM33.9329 11.1876C33.9323 12.7782 35.2213 14.0682 36.8119 14.0688C38.4025 14.0694 39.6925 12.7805 39.6932 11.19C39.6938 9.59937 38.4049 8.30944 36.8142 8.3088H36.8131C35.2232 8.30954 33.9343 9.59783 33.9329 11.1876ZM14.3046 43.5354C11.9646 43.4289 10.6927 43.0391 9.8475 42.7098C8.72694 42.2736 7.92742 41.754 7.08681 40.9146C6.2462 40.0752 5.72586 39.2765 5.29154 38.156C4.96205 37.3112 4.57228 36.039 4.46591 33.6991C4.34955 31.1693 4.32632 30.4093 4.32632 24.0002C4.32632 17.591 4.35147 16.8332 4.46591 14.3013C4.57247 11.9614 4.96513 10.6917 5.29154 9.84442C5.72778 8.7239 6.24735 7.92442 7.08681 7.08384C7.92627 6.24326 8.72502 5.72294 9.8475 5.28864C10.6923 4.95917 11.9646 4.56941 14.3046 4.46304C16.8345 4.34669 17.5944 4.32346 24.001 4.32346C30.4075 4.32346 31.1682 4.34861 33.7002 4.46304C36.0402 4.5696 37.31 4.96224 38.1573 5.28864C39.2779 5.72294 40.0774 6.24442 40.918 7.08384C41.7586 7.92326 42.277 8.7239 42.7133 9.84442C43.0427 10.6892 43.4325 11.9614 43.5389 14.3013C43.6553 16.8332 43.6785 17.591 43.6785 24.0002C43.6785 30.4093 43.6553 31.1672 43.5389 33.6991C43.4323 36.039 43.0406 37.3108 42.7133 38.156C42.277 39.2765 41.7574 40.076 40.918 40.9146C40.0785 41.7533 39.2779 42.2736 38.1573 42.7098C37.3125 43.0393 36.0402 43.4291 33.7002 43.5354C31.1703 43.6518 30.4104 43.675 24.001 43.675C17.5916 43.675 16.8337 43.6518 14.3046 43.5354ZM14.1058 0.145344C11.5508 0.261696 9.80487 0.666816 8.28014 1.2601C6.70107 1.87277 5.36431 2.69472 4.02851 4.02835C2.69272 5.36198 1.87284 6.7008 1.26015 8.27981C0.666843 9.80544 0.261706 11.5503 0.14535 14.1053C0.0270731 16.6643 0 17.4824 0 24C0 30.5176 0.0270731 31.3357 0.14535 33.8947C0.261706 36.4499 0.666843 38.1946 1.26015 39.7202C1.87284 41.2982 2.69291 42.6386 4.02851 43.9716C5.36412 45.3047 6.70107 46.1255 8.28014 46.7399C9.80775 47.3332 11.5508 47.7383 14.1058 47.8547C16.6663 47.971 17.4831 48 24.001 48C30.5189 48 31.337 47.9729 33.8961 47.8547C36.4513 47.7383 38.1961 47.3332 39.7218 46.7399C41.2999 46.1255 42.6376 45.3053 43.9734 43.9716C45.3092 42.638 46.1273 41.2982 46.7418 39.7202C47.3351 38.1946 47.7421 36.4497 47.8566 33.8947C47.9729 31.3338 48 30.5176 48 24C48 17.4824 47.9729 16.6643 47.8566 14.1053C47.7402 11.5501 47.3351 9.80448 46.7418 8.27981C46.1273 6.70176 45.3071 5.3641 43.9734 4.02835C42.6397 2.69261 41.2999 1.87277 39.7237 1.2601C38.1961 0.666816 36.4511 0.259776 33.898 0.145344C31.3389 0.028992 30.5208 0 24.0029 0C17.485 0 16.6663 0.027072 14.1058 0.145344Z" fill="white"/>
            </svg>
            ,
            link: "https://www.instagram.com/svitlo.space/",
            text: "instagram.com/svitlo.space",
        },
    ]

    return (
        <div className="contact-links">
            <section className="contact-links__container">
                <h4>На цій сторінці ви можете знайти наші контактні дані та інформацію про місцерозташування нашого коворкінгу</h4>
                <div className="contact-links__content">
                    <p>
                        Зв'язатися з нами можна будь-яким зручним для вас способом. <br/>
                        Ми завжди готові відповісти на ваші запитання та надати детальну інформацію про
                        наші послуги та події.
                    </p>
                    {data.map((item) => {
                        return(
                            <article key={item.id} className="contact-links__content-item">
                                    {item.svg}
                                <a rel="noreferrer" href={item.link} target="_blank">{item.text}</a>
                            </article>
                        )
                    })}
                </div>
                <ContactForm />
            </section>
        </div>
    )
}
export default ContactLinks
