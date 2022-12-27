import { IconInstagram } from '../../global/Icons/IconInstagram'
import { IconFacebook } from '../../global/Icons/IconFacebook'
import { IconTelegram } from '../../global/Icons/IconTelegram'
import { IconViber} from '../../global/Icons/IconViber'
import { IconPhone } from '../../global/Icons/IconPhone'

export function Footer() {
    return (
        <footer className='footer'>
            <ul className="footer__list">
                <li className="footer__item"><a href="#">Клеевые материалы</a></li>
                <li className="footer__item"><a href="#">Софт Принт</a></li>
                <li className="footer__item"><a href="#">Трикотаж</a></li>
                <li className="footer__item"><a href="#">Подкладка</a></li>
                <li className="footer__item"><a href="#">Лен костюмный</a></li>
                <li className="footer__item"><a href="#">Ткани</a></li>
                <li className="footer__item"><a href="#">Рефлективная ткань</a></li>
                <li className="footer__item"><a href="#">Эко кожа</a></li>
            </ul>

            <div className="footer__schedule">
                <div className="phone">
                    <span>
                        <IconPhone />
                    </span>
                    <p> Номер телефона &nbsp;</p>
                    <a href="#">+380-95-133-27-54</a>
                </div>
                <div className="work_schedule">График работы: 10:00 - 20:00 Без выходных</div>
            </div>

            <div className="footer__social">
                <div><a href="#"><IconInstagram /></a></div>
                <div><a href="#"><IconFacebook /></a></div>
                <div><a href="#"><IconTelegram /></a></div>
                <div><a href="#"><IconViber /></a></div>
            </div>
        </footer>
    )
}