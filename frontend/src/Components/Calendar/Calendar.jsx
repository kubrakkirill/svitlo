import React from 'react'
import "./Calendar.css"
import {useState} from "react";

const Calendar = () => {
    const checkbox = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="16" height="16" rx="3" stroke="#687D6B" stroke-width="2"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M14.3443 6.57289C14.6388 6.25037 14.6286 5.75363 14.3212 5.44344V5.44344C13.9913 5.11052 13.4498 5.12161 13.1338 5.46776L8.41077 10.6412C8.03727 11.0503 7.40236 11.0778 6.99486 10.7026L4.70246 8.59163C4.35318 8.27 3.80567 8.30678 3.50254 8.67223V8.67223C3.22082 9.01188 3.25446 9.51266 3.57907 9.81158L7.65737 13.5671C7.73263 13.6364 7.8506 13.6284 7.91592 13.5497L8.02437 13.4189C8.03365 13.4077 8.05055 13.407 8.06077 13.4173V13.4173C8.07067 13.4273 8.08692 13.427 8.09641 13.4166L14.3443 6.57289Z" fill="#687D6B"/>
    </svg>;
    const emptyCheckbox = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="16" height="16" rx="3" stroke="#687D6B" stroke-width="2"/>
    </svg>;

    const rates = [
        {
            id: 1,
            text: "Погодинний",
        },
        {
            id: 2,
            text: "Поденний",
        },
        {
            id: 3,
            text: "Тижневий",
        },
        {
            id: 4,
            text: "Десятиденний",
        },
        {
            id: 5,
            text: "Місячний",
        },
        {
            id: 6,
            text: "Командний",
        },
    ];

    const [checkedStates, setCheckedStates] = useState(
        rates.map(() => false)
    );

    const check = (index) => {
        setCheckedStates((prevState) => {
            const newState = [...prevState];
            newState[index] = !prevState[index];
            return newState;
        });
    };

    return (
        <div className="calendar">
            <section className="calendar__container">
                <h3>Календар бронювання</h3>
                <div className="calendar__book">
                    <div className="calendar__book-rate">
                        <p>Тариф</p>
                        <div className="calendar__book-rate__items">
                            {rates.map((item, index) => {
                                return (
                                    <article key={item.id}>
                                        <div onClick={() => check(index)} className="calendar__book-rate__items-svg">
                                            {checkedStates[index] ? checkbox : emptyCheckbox}
                                        </div>
                                        <small>{item.text}</small>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                    <div className="calendar__book-date">

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Calendar;
