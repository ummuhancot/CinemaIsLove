import { appConfig } from "@/helpers/config";
import Link from "next/link";
import { Container } from "react-bootstrap";
import "./topbar.scss";
import { AuthMenu } from "./AuthMenu";
import { Spacer } from "../spacer/Spacer";
import { RegisterMenu } from "./RegisterMenu";

export const Topbar = () => {
  return (
    <div className="topbar">
      <Container>
        <div className="slogan">
          <i className="pi pi-heart-fill"></i>
          <span className="text-danger fs-5 fst-italic fw-bold">
            {appConfig.project.slogan}
          </span>
        </div>
        <AuthMenu />
        <Spacer />
        <RegisterMenu />
      </Container>
    </div>
  );
};
