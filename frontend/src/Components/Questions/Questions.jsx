import React, {useState} from 'react'
import './Question.css'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Questions = () => {
    let [answers, setAnswers] = useState(false)

    const toggleAnswer = (questionId) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: !prevAnswers[questionId],
        }));
    };

    const questions = [
        {
            _id: '1',
            question: 'Чи є можливість забронювати кімнату на кілька днів поспіль?',
            questionAnswer: "Так, зв'яжіться з нами та ми допоможемо організувати робочий простір на необхідні дні."
        },
        {
            _id: '2',
            question: 'Які форми оплати приймаються?',
            questionAnswer: "Ми приймаємо оплату банківською картою або готівкою."
        },
        {
            _id: '3',
            question: 'Які години роботи коворкінгу?',
            questionAnswer: "Ми працюємо з понеділка по п'ятницю з 9:00 до 20:00, але для наших клієнтів є можливість працювати в будь-який зручний для них час."
        },
        {

            _id: '4',
            question: 'Як забронювати місце в коворкінгу?',
            questionAnswer: "Ви можете забронювати місце на нашому сайті або ви може  зв'ятись з нами за допомогою контактних даних на нашому сайті або напишіть нам на електронну пошту."
        },
        {
            _id: '5',
            question: 'Чи є можливість організувати корпоративні заходи в Svitlo Space?',
            questionAnswer: "Так, ми раді організувати корпоративні заходи в нашому коворкінгу. Зв'яжіться з нами, щоб дізнатися більше про можливості та умови проведення заходів."
        },
        {
            _id: '6',
            question: 'Чи можу я привести з собою гостя в коворкінг?',
            questionAnswer: "Так, ви можете привести з собою гостя, але повідомте нас про це заздалегідь."
        },
        {
            _id: '7',
            question: 'Які переваги використання Starlink в нашому коворкінгу?',
            questionAnswer: "Starlink - це сучасна технологія інтернет-підключення, яка забезпечує стабільний та швидкий доступ до мережі у будь-якому місці. Використання Starlink в нашому коворкінгу дозволяє нашим клієнтам отримати надійний та швидкий доступ до Інтернету, що є дуже важливим для продуктивної роботи. Крім того, використання Starlink дозволяє нашим клієнтам працювати з великими обсягами даних, стрімінгового відео та інших онлайн-сервісів без обмежень."
        },
        {
            _id: '8',
            question: 'Чи є можливість орендувати кабінет на довготривалий період?',
            questionAnswer: "Так, ми пропонуємо оренду приватного кабінету на довготривалий період. Зв'яжіться з нами для отримання детальної інформації та узгодження умов."
        },
        {
            _id: '9',
            question: 'Які включені послуги в оренду робочого місця?',
            questionAnswer: "В оренду робочого місця включені послуги з доступу до інтернету, безперебійне світло, бомбосховище, конференційність особистих даних за потреби, кава, чай, водичка, смаколики та послуги адміністратора-персонального помічника."
        },
    ]

    return (
        <div className="questions">
            <section className="questions__container">
                <h4>Поширенні запитання</h4>
                {questions.map(({ question, questionAnswer, _id }) => {
                    const isAnswerVisible = answers[_id] || false;
                    return (
                        <div className="questions__items" key={_id}>
                            <div className="questions__items-question questions__items-item">
                                <p>{question}</p>
                                {isAnswerVisible ? (
                                    <IoIosArrowUp
                                        color="#474E54"
                                        size={27}
                                        onClick={() => toggleAnswer(_id)}
                                    />
                                ) : (
                                    <IoIosArrowDown
                                        color="#474E54"
                                        size={27}
                                        onClick={() => toggleAnswer(_id)}
                                    />
                                )}
                            </div>
                            {isAnswerVisible && (
                                <div className="questions__items-answers questions__items-item">
                                    <p>{questionAnswer}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </section>

        </div>
    )
}
export default Questions
