import { SubMenuItem } from "./subMenuItem";
import { IconDropDown } from "../../Icons/IconDropDown";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubTypesThunk } from "../../../../store/SubTypes/subTypesAction";
import { getAllTypesThunk } from "../../../../store/Types/TypesAction";
export function SubMenu(props) {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getAllSubTypesThunk())
        dispatch(getAllTypesThunk())
    }, [])
    const trikotazh =
        [
            "Неопрен",
            "Трехнитка петля",
            "Для футболок",
            "Фактурная ткань"
        ]
    const tkan =
        [
            "Костюмная ткань Шерсть",
            "Костюмная ткань Поливискоза",
            "Польтовые ткани",
            "Габардин однотонный",
            "Карманая ткань Х/Б",
            "Рубашечная ткань",
            "Коттон 100%",
            "Летняя ткань"
        ]

    const podkladka =
        [
            "Вискоза саржа",
            "Нейлон",
            "Атлшас",
            "Вискоза 50/50"
        ]

    const other =
        [
            "Супер софт Принт",
            "Бортовка",
            "Лен костюмный",
            "Эко кожа",
            "Рефлективная ткань"
        ]

    const kleivye =
        [
            "Стрейч Дублерин",
            "Флизелин",
            "Клеевая ткань Дублерин",
            "Шторный Дублерин",
            "Клей двухсторонний",
            "Бандо",
            "Долевик, термолента"
        ]

    return (
        <ul className="header_bottom__sub-menu-list" style={{ width: `${props.width}px` }}>
            <SubMenuItem
                width={props.innerWidth}
                title="Клеевые материалы"
                links={kleivye}
            />

            <SubMenuItem
                width={props.innerWidth}
                title="Трикотаж"
                links={trikotazh}
            />

            <SubMenuItem
                width={props.innerWidth}
                title="Ткань"
                links={tkan}
            />

            <SubMenuItem
                width={props.innerWidth}
                title="Подкладка"
                links={podkladka}
            />

            <SubMenuItem
                width={props.innerWidth}
                title="Прочее"
                links={other}
            />

            
        </ul>
    )
}