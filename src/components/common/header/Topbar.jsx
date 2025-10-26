"use client";

import React from "react";
import Link from "next/link";
import { config } from "@/helpers/config";
import { Container } from "react-bootstrap";
import "./topbar.scss";
import "primeicons/primeicons.css";

export const Topbar = () => {
  return (
    <div className="topbar bg-dark text-light py-2">
      <Container>
        <div className="slogan">
          <i className="pi pi-heart"></i>
          <span className="span">{config.project.slogan}</span>
        </div>
      </Container>
    </div>
  );
};
