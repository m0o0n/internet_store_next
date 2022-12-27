import { useEffect, useState } from "react";
import { IconBars } from "../../Icons/IconBars";
import { SubMenu } from "./subMenu";

export const CatalogMenu = () => {
    const [clientWidth, setClientWidth] = useState(0);
    const [mobileWidth, setMobileWidth] = useState(0);
    const [innerWidth, setInnerWidth] = useState(0)
    const [isShow, setIsShow] = useState(true)
    const handleResize = () => {
        if(window.innerWidth >= 768){
            setClientWidth(document.documentElement.clientWidth);
            setInnerWidth(window.innerWidth)
        } else {
            setClientWidth(document.documentElement.clientWidth*0.8);
            setInnerWidth(window.innerWidth)
        }
    }
    useEffect(() => {
        setClientWidth(document.documentElement.clientWidth);
        setMobileWidth(document.documentElement.clientWidth*0.8)
        setInnerWidth(window.innerWidth)
        window.addEventListener("resize", handleResize, false);
    }, []);
    const onOpen = () => {
        if( window.innerWidth >= 768 ) {
            setIsShow(true)
        } else {
            setIsShow(true)
            setClientWidth(mobileWidth)
        }
    }
    return (
        <li 
            className="
                header_bottom__item 
                header_bottom__catalog-item
            "
            onMouseOver={onOpen}
            onMouseLeave={()=> setIsShow(false)}
        >
            <IconBars />
            Каталог тканей
            {isShow &&  <SubMenu width={clientWidth} innerWidth={innerWidth} />}
            
        </li>
    )
}