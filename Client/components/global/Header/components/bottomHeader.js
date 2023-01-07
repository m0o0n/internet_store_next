import { IconSearch } from "../../Icons/IconSearch";
import { IconCart } from "../../Icons/IconCart";
import { CatalogMenu } from "./catalogMenu";

export function BottomHeader(){
    return (
        <div className="header_bottom">
            <ul className="header_bottom__list">
                <CatalogMenu />
                <li className="header_bottom__item">Главная</li>
                <li className="header_bottom__item">Акции</li>
                <li className="header_bottom__item">Новинки</li>
                <li className="header_bottom__item">Контакты и доставка</li>
            </ul>

            <div className="header_bottom__actions">
                <div className="search"><IconSearch /></div>
                <div className="cart"><IconCart /></div>
            </div>
            
        </div>
    )
}