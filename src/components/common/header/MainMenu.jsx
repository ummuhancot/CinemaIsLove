"use client";

import Nav from "react-bootstrap/Nav";
import menuItems from "@/helpers/data/main-menu.json";
import Link from "next/link";


export const MainMenu = (props) => {
  return (
    <Nav {...props} className="me-auto  mb-lg-0 text-light">
      {menuItems.map((item) => (
        <Nav.Link
          className="border border-danger p-3 m-4 text-center text-white"
          key={item.link}
          href={item?.link}
          as={Link}
        >
          <i className={`${item?.icon} text-danger`}></i>
          &nbsp;
          {item?.title}
        </Nav.Link>
      ))}
    </Nav>
  );
};
