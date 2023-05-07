import React from 'react'
import {Inscription, Header, Footer, Info, EventsList} from '../Components/index'
import '../index.css'
import image from '../Assets/headerEvents.png'
import imageCard1 from "../Assets/eventCard1.png";
import imageCard2 from "../Assets/eventCard2.png";

const Events = () => {
    return (
        <div>
            <Inscription />
            <Header nav={true}
                    title="Svitlo Space – "
                    titleText="це не тільки простір для роботи, але й місце для цікавих та корисних заходів."
                    text="Об'єднання людей, щоб запалити нові ідеї!"
                    button="актуальні заходи"
                    image={image}/>
            <Info title="Спілкуйтесь у надихаючих та інноваційних просторах"
                  text="Ми завжди раді запропонувати нашим клієнтам та гостям різноманітні події,
                  які допоможуть відпочити, навчитись щось нове та знайти нових друзів та партнерів.
                  Наші заходи допомагають нашим клієнтам та гостям розширити свій кругозір, знайти
                  нових друзів та співробітників, а також отримати корисні знання та навички."
                  button="Записатися на захід"
                  data={[
                      {
                          tag: '#svitlo.space',
                          title: 'Нейрографіка – це психологічний метод XXI століття...',
                          img: imageCard1
                      },
                      {
                          tag: '#svitlo.space',
                          title: `Lady' cash - трансформаційна настільна гра...`,
                          img: imageCard2
                      },
                      {
                          tag: '#svitlo.space',
                          title: 'Нейрографіка – це психологічний метод XXI століття...',
                          img: imageCard1
                      }
                  ]}/>
            <EventsList />
            <Header nav={false} title="Svitlo Space – "
                    titleText="має мету розширити доступ до інновацій за допомогою цікавих та актуальних заходів"
                    text="Не пропустіть свій шанс насолодитись цікавим та корисним заходом в нашому коворкінгу. Слідкуйте за анонсами подій на нашому сайті або в соціальних мережах. Будемо раді побачити вас!"
                    button="Підписатись на анонси"
                    image={image}/>
            <Footer />
        </div>
    )
}
export default Events
