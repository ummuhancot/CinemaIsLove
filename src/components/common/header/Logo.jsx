"use client";

import { appConfig } from "@/helpers/config";
import Image from "next/image";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";

export const Logo = () => {
  return (
    <Navbar.Brand href="/" as={Link}>
      <Image
        src={`/img/logo/logomeinmenu-dark.png`}
        width={100}
        height={90}
        alt={appConfig.project.name}
        priority
      />
    </Navbar.Brand>
  );
};
