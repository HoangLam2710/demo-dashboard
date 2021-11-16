import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../components/dashboard/Cards";
import NewCustomer from "../components/dashboard/NewCustomer";
import RecentProjects from "../components/dashboard/RecentProjects";

const Dashboard = () => {
  return (
    <>
      <Container>
        <Cards />
        <Row>
          <Col lg={12} xl={8} style={{ marginTop: "3rem" }}>
            <RecentProjects />
          </Col>
          <Col lg={12} xl={4} style={{ marginTop: "3rem" }}>
            <NewCustomer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
