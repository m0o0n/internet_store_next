import { SubMenuItem } from "./subMenuItem";
import { IconDropDown } from "../../Icons/IconDropDown";
import { useSelector } from "react-redux";

export function SubMenu(props) {
  const subtypes = useSelector((state) => state.SubTypes.subtypes);
  const types = useSelector((state) => state.Types.types);

  return (
    <ul
      className="header_bottom__sub-menu-list"
      style={{ width: `${props.width}px` }}
    >
      {subtypes.map((subtype) => {
        return (
          <SubMenuItem
            key={subtype.id}
            width={props.innerWidth}
            title={subtype.name}
            links={types.filter((type) => type.subTypeId == subtype.id)}
          />
        );
      })}
    </ul>
  );
}
