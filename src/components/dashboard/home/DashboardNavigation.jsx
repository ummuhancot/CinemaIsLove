import { Col, Container, Row } from "react-bootstrap";
import userMenuData from "../../../helpers/data/user-menu.json";
import Link from "next/link";
import { auth } from "../../../../auth";

export const DashboardNavigation = async () => {
  const session = await auth();

  // Backend'den roles array: [{authority: "Admin"}]
  const role = session?.user?.roles?.[0]?.authority;
  const roleKey = role?.toLowerCase?.();
  const userMenu = userMenuData[roleKey] || userMenuData[role] || [];

  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {userMenu && userMenu.length > 0 ? (
          userMenu.map((item) => (
            <Col key={item.link}>
              <Link className="btn btn-outline-primary w-100" href={item.link}>
                {item?.title}
              </Link>
            </Col>
          ))
        ) : (
          <Col>
            <div className="alert alert-info">Loading menu...</div>
          </Col>
        )}
      </Row>
    </Container>
  );
};
