import { useState } from "react";
import { IconDropDown } from "../../Icons/IconDropDown";
import Link from "next/link";

export function SubMenuItem(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <li className="header_bottom__sub-menu-item">
        <div
          onClick={() => {
            setShow(!show);
          }}
          className="header_bottom__sub-menu-item__title"
        >
          {props.title}
          <span>
            <IconDropDown />
          </span>
        </div>
        {props.width >= 768 || show ? (
          <>
            {props.links.map((link) => {
              const linkName =  link.name.split(" ").join("")
              return(
              <Link
                href={`/category/[...slug]`}
                as={`/category/${link.id}/${encodeURIComponent(link.name)}`}
                key={link.id}
                className="header_bottom__sub-menu-item__link"
              >
                {link.name}
              </Link>
              )
              
            })}
          </>
        ) : null}
      </li>
    </>
  );
}

// as={`/category/${link.name}`}
