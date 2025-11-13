"use client";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Logo } from "./Logo";
import Image from "next/image";
import { appConfig } from "@/helpers/config";
import { MainMenu } from "@/components/common/header/MainMenu.jsx";


export const MainMenuBar = () => {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="border border-danger content-section"
      collapseOnSelect
    >
      <Container>
        <Logo />
        <Navbar.Toggle />
        <Navbar.Offcanvas
          id="main-menu"
          aria-labelledby="main-menu"
          placement="end"
        >
          <Offcanvas.Header className="cinema" closeButton>
            <Offcanvas.Title id="main-menu-title">
              <Image
                src="/img/logo/logomeinmenu-dark.png"
                width={70}
                height={70}
                alt={appConfig.project.name}
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="bg-black">
            <MainMenu className="justify-content-center flex-grow-1" />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
