import { IconSearch } from "../../Icons/IconSearch";
import { IconCart } from "../../Icons/IconCart";
import { CatalogMenu } from "./catalogMenu";
import { useDispatch, useSelector } from "react-redux";
import { AuthThunk } from "../../../../store/User/userActions";
import Link from "next/link";


export const BottomHeader = () => {
  const user = useSelector((state) => state.User.user);
  const dispatch = useDispatch();
  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(AuthThunk());
  };
  return (
    <div className="header_bottom">
      <ul className="header_bottom__list">
        <CatalogMenu />
        <li className="header_bottom__item">
          <Link href={`/`}>Главная</Link>
        </li>
        <li className="header_bottom__item">
          <Link href={`/`}>Акции</Link>
        </li>
        <li className="header_bottom__item">
          <Link href={`/`}>Новинки</Link>
        </li>
        <li className="header_bottom__item">
          <Link href={`/`}>Контакты и доставка</Link>
        </li>
      </ul>

      <div className="header_bottom__actions">
        <div className="search">
          <IconSearch />
        </div>
        <div className="cart">
          <IconCart />
        </div>
        {user.role === "ADMIN" ? (
          <div className="admin">
            <Link href="/admin">Admin</Link>
          </div>
        ) : null}
        {user.id ? (
          <div
            onClick={() => {
              logOut();
            }}
            className="admin"
          >
            Logout
          </div>
        ) : null}
      </div>
    </div>
  );
}

