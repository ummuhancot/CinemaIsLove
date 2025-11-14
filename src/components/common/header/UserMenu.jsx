"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ButtonLogout } from "./ButtonLogout";
import "./UserMenu.scss";

export const UserMenu = ({ session, userMenu }) => {
  const [show, setShow] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { name } = session?.user;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNavigate = (link) => {
    setShow(false);
    router.push(link);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="use-menu">
      <Button
        variant="light"
        className="user-menu-trigger"
        onClick={handleShow}
      >
        <i className="pi pi-user"> {name || "User"} </i>
      </Button>

      <Offcanvas show={show} onHide={handleClose} className="user-menu">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="bg-dark p-2 d-flex flex-column p-2 rounded-1">
              <div className="bg-danger p-2 d-flex flex-column m-1 p-2 rounded-1">
                <i className="pi pi-user text-light"> {name || "Menu"} </i>
              </div>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {userMenu?.map((item) => (
              <Button
                key={item.title}
                className="nav-link btn btn-dark m-3 bg-black text-ligth"
                onClick={() => handleNavigate(item.link)}
              >
                {item.title}
              </Button>
            ))}
            <hr className="border border-dark border-2 opacity-50" />
            <div className="bg-dark p-2 d-flex flex-column mb-3 rounded-1 ">
              <ButtonLogout setShow={setShow} />
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
