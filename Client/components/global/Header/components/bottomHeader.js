import { IconSearch } from "../../Icons/IconSearch";
import { IconCart } from "../../Icons/IconCart";
import { CatalogMenu } from "./catalogMenu";
import { useDispatch, useSelector } from "react-redux";
import { AuthThunk } from "../../../../store/User/userActions";
import Link from 'next/link'

export function BottomHeader(){
    const user = useSelector(state => state.User)
    const dispatch = useDispatch()
    const logOut = () => {
        localStorage.removeItem('token')
        dispatch(AuthThunk())
    }
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
                {user.role === "ADMIN"
                 ? <div className="admin"><Link href='/admin'>Admin</Link></div> 
                 : null}
                 {user.id
                 ? <div onClick={()=>{logOut()}} className="admin">Logout</div> 
                 : null}
            </div>
            
        </div>
    )
}