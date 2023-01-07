import { useState } from "react";
import { IconDropDown } from "../../Icons/IconDropDown";

export function SubMenuItem(props) {
    const [show, setShow] = useState(false)
    return (
        <>
            <li className="header_bottom__sub-menu-item">
                <div className="header_bottom__sub-menu-item__title">
                    {props.title}
                    <span onClick={() => { setShow(!show) }}>
                        <IconDropDown />
                    </span>
                </div>
                {props.width >= 768 ? (
                    <>
                        {
                            props.links.map(
                                link =>
                                    <a
                                        className="header_bottom__sub-menu-item__link"
                                        href="#"
                                        key={link}
                                    >
                                        {link}
                                    </a>
                            )
                        }
                    </>
                ) : show ? (
                    <>
                        {
                            props.links.map(
                                link =>
                                    <a
                                        className="header_bottom__sub-menu-item__link"
                                        href="#"
                                        key={link}
                                    >
                                        {link}
                                    </a>
                            )
                        }

                    </>
                ) : null}

            </li>
        </>


    )
}